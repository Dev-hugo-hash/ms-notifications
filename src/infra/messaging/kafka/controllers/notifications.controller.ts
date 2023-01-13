import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern('ms-notification-kafka')
  async handleSendNotification(@Payload() { content, category, recipientId }) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
