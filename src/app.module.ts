import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { RestoranModule } from './restoran/restoran.module';
import { TableModule } from './table/table.module';
import { MenuModule } from './menu/menu.module';
import { LanguageModule } from './language/language.module';
import { ManagerModule } from './manager/manager.module';
import { ClientModule } from './client/client.module';
import { WaiterModule } from './waiter/waiter.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env",isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    RestoranModule,
    TableModule,
    MenuModule,
    LanguageModule,
    ManagerModule,
    ClientModule,
    WaiterModule,
    ReservationModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
