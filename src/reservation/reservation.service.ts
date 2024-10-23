import { Injectable } from "@nestjs/common";
import { CreateReservationDto } from "./dto/create-reservation.dto";
import { UpdateReservationDto } from "./dto/update-reservation.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Reservation, ReservationDocument } from "./schemas/reservation.schema";
import { Model } from "mongoose";

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<ReservationDocument>
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return this.reservationModel.create(createReservationDto)
  }

  findAll() {
    return this.reservationModel.find()
  }

  findOne(id: string) {
    return `This action returns a #${id} reservation`;
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: string) {
    return `This action removes a #${id} reservation`;
  }
}
