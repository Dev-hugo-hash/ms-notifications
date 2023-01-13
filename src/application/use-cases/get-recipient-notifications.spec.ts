import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient Notifications', () => {
  it('should be able to Get recipient Notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-03' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-03' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-06' }),
    );
    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-id-03',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id-03' }),
      ]),
    );
  });
});
