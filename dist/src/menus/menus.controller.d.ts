import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenusController {
    private readonly menusService;
    constructor(menusService: MenusService);
    create(createMenuDto: CreateMenuDto): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    findDrafts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Menu[]>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Menu[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    update(id: string, updateMenuDto: UpdateMenuDto): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__MenuClient<import(".prisma/client").Menu, never>;
}
