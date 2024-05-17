import { Wallet } from './wallet';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Movement {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  type: string;

  @ApiProperty({ type: Number })
  value: number;

  @ApiPropertyOptional({ type: String })
  category?: string;

  @ApiPropertyOptional({ type: String })
  observation?: string;

  @ApiProperty({ type: Date })
  date: Date;

  @ApiProperty({ type: () => Wallet })
  wallet: Wallet;

  @ApiProperty({ type: Number })
  walletId: number;
}
