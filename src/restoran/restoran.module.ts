import { Module } from "@nestjs/common";
import { RestoranService } from "./restoran.service";
import { RestoranController } from "./restoran.controller";
import { Restoran, restoranSchema } from "./schemas/restoran.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Language, languageSchema } from "../language/schemass/language.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Restoran.name,
        schema: restoranSchema,
      },
      {
        name: Language.name,
        schema: languageSchema,
      },
    ]),
  ],
  controllers: [RestoranController],
  providers: [RestoranService],
})
export class RestoranModule {}
