import { Notification } from '../entities/notification';

// Contrato (O que deve ser implementado sem implementar)
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
