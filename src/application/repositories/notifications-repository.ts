import { Notification } from '../entities/notification';

// Contrato (O que deve ser implementado sem implementar)
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  // PADRONIZAÇÀO : MANY -> MAIS DE UMA COISA BY -> DE ALGUMA COISA
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
