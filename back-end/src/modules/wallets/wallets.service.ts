/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class WalletsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.WalletCreateInput) {
    return this.prisma.wallet.create({
      data,
    });
  }

  async findOne(id: string) {
    return this.prisma.wallet.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async findMovements(id: string) {
    return this.prisma.movement.findMany({
      where: {
        walletId: parseInt(id),
      },
      orderBy: {
        date: 'desc',
      },
      take: 10,
    });
  }

  async findAllMovements(id: string) {
    return this.prisma.movement.findMany({
      where: {
        walletId: parseInt(id),
      },
      orderBy: {
        date: 'desc',
      },
    });
  }
}
