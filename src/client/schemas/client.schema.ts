import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Tables } from "../../table/schemas/table.schema";

export type ClientDocument = HydratedDocument<Client>;
@Schema({ versionKey: false })
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  address: string;

  @Prop()
  phone_number: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tables",
      },
    ],
  })
  tables: Tables[];
}

export const clietnSchema = SchemaFactory.createForClass(Client);
