import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';
import { Message, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  public async message(
    messageWhereUniqueInput: Prisma.MessageWhereUniqueInput
  ): Promise<Message | null> {
    return this.prisma.message.findUnique({
      where: messageWhereUniqueInput,
    });
  }
}
