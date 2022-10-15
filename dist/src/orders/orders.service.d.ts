import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Order[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    update(id: number, updateOrderDto: UpdateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
}
