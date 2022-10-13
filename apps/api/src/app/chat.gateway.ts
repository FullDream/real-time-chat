import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from '@nestjs/websockets';
import { Prisma } from '@prisma/client';

import { Socket, Server } from 'socket.io';
import { ChatService } from '../common/services/chat.service';

const users: Record<string, string> = {};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  serveClient: false,
  namespace: 'chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('server starting');
  }

  public handleConnection(client: Socket, ...args: any[]): void {
    client.broadcast.emit('log');
  }

  public handleDisconnect(client: Socket): void {
    client.broadcast.emit('log');
  }

  @SubscribeMessage('messages:get')
  async handleMessagesGet(): Promise<void> {
    const messages = await this.chatService.getMessages();
    this.server.emit('messages', messages);
  }

  @SubscribeMessage('messages:clear')
  async handleMessagesClear(): Promise<void> {
    await this.chatService.clearMessages();
  }

  @SubscribeMessage('message:post')
  async handleMessagePost(
    @MessageBody()
    payload: Prisma.MessageCreateInput
  ): Promise<void> {
    const createdMessage = await this.chatService.createMessage(payload);
    this.server.emit('message:post', createdMessage);

    this.handleMessagesGet();
  }

  @SubscribeMessage('message:delete')
  async handleMessageDelete(
    @MessageBody()
    payload: Prisma.MessageWhereUniqueInput
  ) {
    const removedMessage = await this.chatService.removeMessage(payload);
    this.server.emit('message:delete', removedMessage);
    this.handleMessagesGet();
  }
}
