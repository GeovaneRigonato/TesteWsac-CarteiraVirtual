/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { MovementsService } from './movements.service';

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Post('/deposit/:walletId')
  async deposit(
    @Body() createMovement: Prisma.MovementCreateInput,
    @Param('walletId') walletId: number,
  ) {
    return this.movementsService.deposit(createMovement, walletId);
  }

  @Post('/payment/:walletId')
  async payment(
    @Body() createMovement: Prisma.MovementCreateInput,
    @Param('walletId') walletId: number,
  ) {
    return this.movementsService.payment(createMovement, walletId);
  }

  //buscar todas as movimentações de deposito da carteira pelo id
  @Get(':id/deposit')
  async findDeposits(@Param('id') id: string) {
    return this.movementsService.findDeposits(id);
  }

  //buscar todas as movimentações de pagamento da carteira pelo id
  @Get(':id/payment')
  async findPayments(@Param('id') id: string) {
    return this.movementsService.findPayments(id);
  }
}
