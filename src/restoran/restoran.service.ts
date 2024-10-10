import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRestoranDto } from './dto/create-restoran.dto';
import { UpdateRestoranDto } from './dto/update-restoran.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restoran, RestoranDocument } from './schemas/restoran.schema';
import { Model } from 'mongoose';
import { Language, LanguageDocument } from '../language/schemass/language.schema';

@Injectable()
export class RestoranService {
  constructor(
    @InjectModel(Restoran.name) private restoranModel: Model<RestoranDocument>,
    @InjectModel(Language.name) private languageModel: Model<LanguageDocument>
  ) {}
  async create(createRestoranDto: CreateRestoranDto) {
    const { language_id } = createRestoranDto;
    const language = await this.languageModel.findById(language_id);
    if (!language) {
      throw new BadRequestException("Language not found");
    }
    const newRestoran = await this.restoranModel.create(createRestoranDto);
    await newRestoran.save();
    language.restaurant.push(newRestoran);
    await language.save();

    return newRestoran;
  }

  findAll() {
    return this.restoranModel.find().populate("tables");
  }

  findOne(id: number) {
    return `This action returns a #${id} restoran`;
  }

  update(id: number, updateRestoranDto: UpdateRestoranDto) {
    return `This action updates a #${id} restoran`;
  }

  remove(id: number) {
    return `This action removes a #${id} restoran`;
  }
}
