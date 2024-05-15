/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateWalletUseCase } from './use-cases/createWallet.useCase';

@Controller('wallets')
export class WalletsController {

  @Inject(CreateWalletUseCase)
  private readonly createWalletUseCase: CreateWalletUseCase;
  
  @Post()
  create(@Body() balance: number) {
    return this.createWalletUseCase.execute(balance);
  }

  // @Get()
  // findAll() {
  //   return this.walletsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.walletsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
  //   return this.walletsService.update(+id, updateWalletDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.walletsService.remove(+id);
  // }
}
