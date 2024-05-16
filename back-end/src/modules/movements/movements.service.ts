// movements.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MovementCreateInput) {
    return this.prisma.movement.create({
      data,
    });
  }

  async deposit(data: Prisma.MovementCreateInput, walletId: number) {
    console.log('deposit', data, walletId);

    // Convertendo walletId para número, caso necessário
    const walletIdNumber =
      typeof walletId === 'string' ? parseInt(walletId, 10) : walletId;

    const wallet = await this.prisma.wallet.findUnique({
      where: {
        id: walletIdNumber,
      },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    const newBalance = wallet.balance + data.value;

    await this.prisma.wallet.update({
      where: {
        id: walletIdNumber,
      },
      data: {
        balance: newBalance,
      },
    });

    // Remova 'walletId' de 'data' e forneça 'type' explicitamente
    return this.prisma.movement.create({
      data: {
        ...data,
        type: 'deposit', // Por exemplo, defina o tipo como 'deposit'
      },
    });
  }

  async payment(data: Prisma.MovementCreateInput, walletId: number) {
    console.log('payment', data, walletId);

    // Convertendo walletId para número, caso necessário
    const walletIdNumber =
      typeof walletId === 'string' ? parseInt(walletId, 10) : walletId;

    const wallet = await this.prisma.wallet.findUnique({
      where: {
        id: walletIdNumber,
      },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    const newBalance = wallet.balance - data.value;

    await this.prisma.wallet.update({
      where: {
        id: walletIdNumber,
      },
      data: {
        balance: newBalance,
      },
    });

    // Remova 'walletId' de 'data' e forneça 'type' explicitamente
    return this.prisma.movement.create({
      data: {
        ...data,
        type: 'payment', // Por exemplo, defina o tipo como 'payment'
      },
    });
  }

  async findDeposits(id: string) {
    return this.prisma.movement.findMany({
      where: {
        walletId: parseInt(id),
        type: 'deposit',
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findPayments(id: string) {
    return this.prisma.movement.findMany({
      where: {
        walletId: parseInt(id),
        type: 'payment',
      },
      orderBy: {
        date: 'desc',
      },
    });
  }
}
