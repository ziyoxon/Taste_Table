import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";

export type MenuDocument = HydratedDocument<Menu>;
@Schema({ versionKey: false })
export class Menu {
  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image_url: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restoran",
  })
  restoran_id: Restoran;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restoran",
      },
    ],
  })
  restaurant_id: Restoran[];
}

export const menuSchema = SchemaFactory.createForClass(Menu)