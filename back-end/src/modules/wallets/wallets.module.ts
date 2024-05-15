import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletPrisma } from './prisma-config/walletPrisma';
import { CreateWalletUseCase } from './use-cases/createWallet.useCase';


@Module({
  imports: [PrismaModule],
  controllers: [WalletsController],
  providers: [WalletPrisma, { provide: 'WalletPersistence', useClass: WalletPrisma},CreateWalletUseCase],
})
export class WalletsModule {}
