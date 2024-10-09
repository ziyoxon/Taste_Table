import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";

export type TableDocument = HydratedDocument<Tables>;
@Schema({ versionKey: false })
export class Tables {
  @Prop()
  number: string;

  @Prop()
  amount: number;

  @Prop({
    type:mongoose.Schema.Types.ObjectId,
    ref:"Restoran"
  })
  restoran_id: Restoran;
}

export const tableSchema = SchemaFactory.createForClass(Tables);
