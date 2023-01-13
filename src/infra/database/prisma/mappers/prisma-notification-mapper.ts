import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as RawNotification } from '@prisma/client';
export class PrismaNotificationMapper {
  // static pois não precisaremos instanciar
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  //Converter a notificação do prisma para a da camada da nossa aplicação
  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
