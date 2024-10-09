import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tables, tableSchema } from './schemas/table.schema';
import { Restoran, restoranSchema } from '../restoran/schemas/restoran.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tables.name,
        schema: tableSchema,
      },
      {
        name: Restoran.name,
        schema: restoranSchema,
      },
    ]),
  ],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
