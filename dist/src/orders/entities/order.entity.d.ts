import { Order } from '@prisma/client';
export declare class OrderEntity implements Order {
    id: number;
    nameClient: string;
    numberTable: number;
    valueOrder: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    menuId: number;
}
