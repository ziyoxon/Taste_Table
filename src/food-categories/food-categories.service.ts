import { Injectable } from "@nestjs/common";
import { CreateFoodCategoryDto } from "./dto/create-food-category.dto";
import { UpdateFoodCategoryDto } from "./dto/update-food-category.dto";
import { InjectModel } from "@nestjs/mongoose";
import { FCategorie, fcategorieDocument } from "./schemas/food-category.schema";
import { Model } from "mongoose";

@Injectable()
export class FoodCategoriesService {
  constructor(
    @InjectModel(FCategorie.name)
    private foodCategoryModel: Model<fcategorieDocument>
  ) {}

  create(createFoodCategoryDto: CreateFoodCategoryDto) {
    return this.foodCategoryModel.create(createFoodCategoryDto);
  }

  findAll() {
    return this.foodCategoryModel.find().exec();
  }

  findOne(id: string) {
    return this.foodCategoryModel.findById(id).exec();
  }

  update(id: string, updateFoodCategoryDto: UpdateFoodCategoryDto) {
    return this.foodCategoryModel
      .findByIdAndUpdate(id, updateFoodCategoryDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.foodCategoryModel.findByIdAndDelete(id).exec();
  }
}
