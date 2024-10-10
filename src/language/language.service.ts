import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Language, LanguageDocument } from "./schemass/language.schema";
import { Model } from "mongoose";

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language.name) private languageModel: Model<LanguageDocument>
  ) {}

  async create(
    createLanguageDto: CreateLanguageDto
  ): Promise<LanguageDocument> {
    const language = new this.languageModel(createLanguageDto);
    return language.save();
  }

  async findAll(): Promise<LanguageDocument[]> {
    return this.languageModel.find().populate("restaurant").exec(); // Agar 'Language' 'restaurants' maydoni bilan bog'langan bo'lsa
  }

  async findOne(id: string): Promise<LanguageDocument> {
    return this.languageModel.findById(id).exec();
  }

  async update(
    id: string,
    updateLanguageDto: UpdateLanguageDto
  ): Promise<LanguageDocument> {
    return this.languageModel
      .findByIdAndUpdate(id, updateLanguageDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<LanguageDocument> {
    return this.languageModel.findByIdAndDelete(id).exec();
  }
}
