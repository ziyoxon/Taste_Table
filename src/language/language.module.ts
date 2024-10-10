import { Module } from "@nestjs/common";
import { LanguageService } from "./language.service";
import { LanguageController } from "./language.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Language, languageSchema } from "./schemass/language.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Language.name,
        schema: languageSchema,
      },
      // {
      //   name: Restoran.name,
      //   schema: restoranSchema,
      // },
    ]),
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
