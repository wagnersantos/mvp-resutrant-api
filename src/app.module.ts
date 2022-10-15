import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MenusModule } from './menus/menus.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, MenusModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
