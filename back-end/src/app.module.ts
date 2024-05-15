import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './modules/wallets/wallets.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WalletsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
