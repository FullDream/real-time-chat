import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';
import { Message, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: Prisma.MessageCreateInput) {
    return this.prisma.message.create({ data: data });
  }
}
