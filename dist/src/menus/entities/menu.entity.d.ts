import { Menu } from '@prisma/client';
export declare class MenuEntity implements Menu {
    id: number;
    name: string;
    description: string | null;
    pathPhoto: string;
    active: boolean;
    valueMenu: number;
    createdAt: Date;
    updatedAt: Date;
}
