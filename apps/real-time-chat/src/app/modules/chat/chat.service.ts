import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message, Prisma } from '@prisma/client';

@Injectable()
export class ChatService {
  messages$ = this.socket.fromEvent<Message[]>('messages');
  constructor(private socket: Socket) {}
  initChat() {
    this.socket.emit('messages:get');
  }

  sendMessage(msg: Prisma.MessageCreateInput) {
    this.socket.emit('message:post', msg);
  }

  close() {
    this.socket.disconnect();
  }
}
