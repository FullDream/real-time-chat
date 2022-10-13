import { Module } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';

import { AppController } from './app.controller';
import { ChatGateway } from './chat.gateway';
import { AppService } from './app.service';
import { ChatService } from '../common/services/chat.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, ChatGateway, ChatService],
})
export class AppModule {}
