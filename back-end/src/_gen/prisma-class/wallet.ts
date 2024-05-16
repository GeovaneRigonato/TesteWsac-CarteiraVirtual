import { Movement } from './movement';
import { ApiProperty } from '@nestjs/swagger';

export class Wallet {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  balance: number;

  @ApiProperty({ isArray: true, type: () => Movement })
  movements: Movement[];
}
