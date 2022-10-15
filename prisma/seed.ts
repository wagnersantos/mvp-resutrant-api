import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

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

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
