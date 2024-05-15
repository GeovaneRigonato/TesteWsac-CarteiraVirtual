import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';

@Module({
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
