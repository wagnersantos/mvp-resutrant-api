import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MenusService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMenuDto: CreateMenuDto): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    findDrafts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Menu[]>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Menu[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    update(id: number, updateMenuDto: UpdateMenuDto): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
}
