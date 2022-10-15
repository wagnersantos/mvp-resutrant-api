import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  nameClient?: string;

  @ApiProperty()
  numberTable: number;

  @ApiProperty({ required: false })
  valueOrder?: number = 0;

  @ApiProperty({ required: false, default: 'Open' })
  status: string;

  @ApiProperty()
  menuId: number;
}
