import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";

export type fcategorieDocument = HydratedDocument<FCategorie>;
@Schema({ versionKey: false })
export class FCategorie {
  @Prop()
  name: string;

  @Prop()
  description: string;

//   @Prop({
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "languages",
//   })
//   language_id: Language;
}

export const fcategoriSchema = SchemaFactory.createForClass(FCategorie);
