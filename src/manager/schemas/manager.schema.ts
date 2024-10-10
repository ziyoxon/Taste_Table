import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ManagerDocument = HydratedDocument<Manager>;
@Schema({ versionKey: false })
export class Manager {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  created_at: boolean;
}

export const managerSchema = SchemaFactory.createForClass(Manager);
