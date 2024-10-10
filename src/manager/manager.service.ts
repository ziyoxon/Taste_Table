import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Manager, ManagerDocument } from "./schemas/manager.schema";
import { Model } from 'mongoose';

@Injectable()
export class ManagerService {
  constructor(
    @InjectModel(Manager.name) private managerModel : Model <ManagerDocument>,
  ){}
  create(createManagerDto: CreateManagerDto) {
    return this.managerModel.create(createManagerDto);
  }

  findAll() {
    return this.managerModel.find()
  }

  findOne(id: string) {
    return this.managerModel.findById(id);
  }

  update(id: string, updateManagerDto: UpdateManagerDto) {
    return this.managerModel
    .findByIdAndUpdate(id,updateManagerDto,{new:true})
  }

  remove(id: string) {
    return this.managerModel.findByIdAndDelete(id)
  }
}
