import { Content } from './content';
describe('Notification content: ', () => {
  it('should be able to a create a notification', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');

    //O valor deve ser verdadeiro
    expect(content).toBeTruthy();
  });

  it('should not be able to a create a notification with less than 5 characteres', () => {
    //O valor deve retornar um erro
    expect(() => new Content('Hi')).toThrow();
  });

  it('should not be able to a create a notification with more than 240 characteres', () => {
    //O valor deve retornar um erro
    expect(() => new Content('Hi'.repeat(241))).toThrow();
  });
});
