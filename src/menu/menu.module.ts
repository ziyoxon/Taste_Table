import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, menuSchema } from './schemas/menu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Menu.name,
        schema: menuSchema,
      },
      // {
      //   name: Restoran.name,
      //   schema: restoranSchema,
      // },
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
