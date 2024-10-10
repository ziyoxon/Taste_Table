import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";
import { Menu } from "../../menu/schemas/menu.schema";

export type LanguageDocument = HydratedDocument<Language>;
@Schema({ versionKey: false })
export class Language {
  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  })
  menu_id: Menu;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restoran",
      },
    ],
  })
  restaurant: Restoran[];


  
}

export const languageSchema = SchemaFactory.createForClass(Language);
