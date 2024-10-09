import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { RestoranModule } from './restoran/restoran.module';
import { TableModule } from './table/table.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env",isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    RestoranModule,
    TableModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
