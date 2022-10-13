import { Injectable } from '@nestjs/common';
import { Message } from '@real-time-chat/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
