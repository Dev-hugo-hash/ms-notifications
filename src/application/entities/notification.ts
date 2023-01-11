import { Content } from './content';
import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'crypto';
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
//Uma entidade a nivel de código não necessáriamente é uma tabela de banco
export class Notification {
  private _id: string;
  private props: NotificationProps;
  //Uma entidade representa cases da vida real logo uma classe notification, precisa possuir atributos relacionados a notificações

  //arquitetura que funciona em ambas as linguagens

  //A interface auxilia na construção do constructor
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  // getters e setters: interceptadores de acesso a propriedades privadas

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }
  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  //So tem get, pois não faz sentido atualizar essa propriedade apenas pegar
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
