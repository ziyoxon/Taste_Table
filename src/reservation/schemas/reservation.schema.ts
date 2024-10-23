import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReservationDocument = HydratedDocument<Reservation>
@Schema({ versionKey: false })
export class Reservation {
  @Prop()
  reservation_time: string;

  @Prop()
  number_of_guest: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation)
