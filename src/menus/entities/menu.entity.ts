import { Menu } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MenuEntity implements Menu {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  pathPhoto: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  valueMenu: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
