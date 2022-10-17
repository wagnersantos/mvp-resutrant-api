import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenusService {
  constructor(private prisma: PrismaService) {}

  create(createMenuDto: CreateMenuDto) {
    return this.prisma.menu.create({ data: createMenuDto });
  }

  createMany(createMenuDto: CreateMenuDto[]) {
    return this.prisma.menu.createMany({ data: createMenuDto });
  }

  findDrafts() {
    return this.prisma.menu.findMany({ where: { active: false } });
  }

  findAll() {
    return this.prisma.menu.findMany({ where: { active: true } });
  }

  findOne(id: number) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.prisma.menu.update({
      where: { id },
      data: updateMenuDto,
    });
  }

  remove(id: number) {
    return this.prisma.menu.delete({ where: { id } });
  }
}
