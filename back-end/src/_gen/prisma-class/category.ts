import { Movement } from './movement';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiProperty({ isArray: true, type: () => Movement })
  movements: Movement[];
}
