import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";

export type WaiterDocument = HydratedDocument<Waiter>;
@Schema({ versionKey: false })
export class Waiter {
  @Prop()
  full_name: string;
  @Prop()
  phone: string;

  @Prop()
  is_active: boolean;

  @Prop()
  hire_date: string;
}

export const waiterSchema = SchemaFactory.createForClass(Waiter);
