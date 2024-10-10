import { Injectable } from "@nestjs/common";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Menu, MenuDocument } from "./schemas/menu.schema";
import { Model } from "mongoose";

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  async create(createMenuDto: CreateMenuDto): Promise<MenuDocument> {
    const menu = new this.menuModel(createMenuDto);
    return menu.save();
  }

  async findAll(): Promise<MenuDocument[]> {
    return this.menuModel.find().exec();
  }

  async findOne(id: string): Promise<MenuDocument> {
    return this.menuModel.findById(id).exec();
  }

  async update(
    id: string,
    updateMenuDto: UpdateMenuDto
  ): Promise<MenuDocument> {
    return this.menuModel
      .findByIdAndUpdate(id, updateMenuDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<MenuDocument> {
    return this.menuModel.findByIdAndDelete(id).exec();
  }
}
