import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}
interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}
//Tudo se conecta dentro de um caso de uso
@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
