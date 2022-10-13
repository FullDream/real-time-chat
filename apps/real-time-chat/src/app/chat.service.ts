import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Socket } from 'ngx-socket-io';
@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  initChat() {
    this.socket.emit('messages:get');
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent<any>('messages');
  }
}
