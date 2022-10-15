import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Order[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    update(id: string, updateOrderDto: UpdateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
}
