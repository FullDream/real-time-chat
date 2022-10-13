import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { Message, Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() payload: Prisma.MessageUncheckedCreateInput) {
    console.log(payload);

    return this.appService.createMessage(payload);
  }
}
