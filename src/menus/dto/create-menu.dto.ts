import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  pathPhoto?: string;

  @ApiProperty({ required: false, default: false })
  active?: boolean = false;

  @ApiProperty({ required: false, default: false })
  valueMenu?: number = 0;
}
