import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient Notifications', () => {
  it('should be able to count recipient Notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
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
    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id-03',
    });

    expect(count).toEqual(2);
  });
});
