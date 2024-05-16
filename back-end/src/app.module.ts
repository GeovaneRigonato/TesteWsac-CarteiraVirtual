import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { MovementsModule } from './modules/movements/movements.module';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [MovementsModule, WalletsModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
