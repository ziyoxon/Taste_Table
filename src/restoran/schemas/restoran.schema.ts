import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Tables } from "../../table/schemas/table.schema";

export type RestoranDocument = HydratedDocument<Restoran>;
@Schema({ versionKey: false })
export class Restoran {
  @Prop()
  name: string;

  @Prop()
  phone_number: string;

  @Prop()
  description: string;

  @Prop({
    type:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tables'
        }
    ]
  })
  tables: Tables[];

}

export const restoranSchema = SchemaFactory.createForClass(Restoran);
