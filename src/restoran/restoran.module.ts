import { Module } from "@nestjs/common";
import { RestoranService } from "./restoran.service";
import { RestoranController } from "./restoran.controller";
import { Restoran, restoranSchema } from "./schemas/restoran.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Restoran.name,
        schema: restoranSchema,
      },
    ]),
  ],
  controllers: [RestoranController],
  providers: [RestoranService],
})
export class RestoranModule {}
