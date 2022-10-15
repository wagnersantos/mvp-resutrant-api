"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.menu.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Batata frita',
            description: 'Batata cortada em palito e frita em oleo quente.',
            active: false,
        },
    });
    const post2 = await prisma.menu.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Frango a passarinho',
            description: 'Frango temperado frito no oleo quente.',
            active: true,
        },
    });
    const order = await prisma.order.create({
        data: {
            nameClient: 'Samuel',
            numberTable: 12,
            menuId: 1,
        },
    });
    console.log({ post1, post2, order });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map