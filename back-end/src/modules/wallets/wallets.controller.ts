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
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  async create(@Body() data: Prisma.WalletCreateInput) {
    return this.walletsService.create(data);
  }

  //buscar saldo da carteira pelo id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  //buscar as ultimas 10 movimentações da carteira pelo id
  @Get(':id/movements')
  async findMovements(@Param('id') id: string) {
    return this.walletsService.findMovements(id);
  }

  //buscar todas as movimentações da carteira pelo id
  @Get(':id/movements/all')
  async findAllMovements(@Param('id') id: string) {
    return this.walletsService.findAllMovements(id);
  }
}
