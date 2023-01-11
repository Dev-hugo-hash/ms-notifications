import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateNotificationBody {
  //quais os campos preciso ter para criar uma notificação?
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;

  @IsNotEmpty()
  @Length(8, 240)
  content!: string;

  @IsNotEmpty()
  category!: string;
}
