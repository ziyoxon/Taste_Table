import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restoran, RestoranDocument } from '../restoran/schemas/restoran.schema';
import { Model } from 'mongoose';
import { TableDocument, Tables } from './schemas/table.schema';
import *  as  QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Restoran.name) private restoranModel: Model<RestoranDocument>,
    @InjectModel(Tables.name) private tableModel: Model<TableDocument>
  ) {}


   async generateQrCodeFile(text:string,filenames:string):Promise <string>{
    try {
      const qrCodeBuffer =  await QRCode.toBuffer(text);
      const filepath = path.join(
        __dirname,
        '../public/qr-codes',
        `${filenames}.png`
      );
      fs.mkdirSync(path.dirname(filepath),{recursive: true});

      fs.writeFileSync(filepath,qrCodeBuffer)

      return filepath
    } catch (error) {
      throw new Error("Failed to genrate or save Qr code");
    }
  }




  async create(createTableDto: CreateTableDto) {
    const {restoran_id} = createTableDto;
    const restoran = await this.restoranModel.findById(restoran_id);
    if (!restoran) {
      throw new BadRequestException('Restoran not found');
    }
    const newTable = await this.tableModel.create(createTableDto);

    const baseURL = `${process.env.API_URL}:${process.env.PORT}/api/menu`;
    const link = `${baseURL}/${restoran_id}/${newTable._id}`;
    await this.generateQrCodeFile(link,String(newTable._id));
    newTable.qr_code = link
    await newTable.save();


    restoran.tables.push(newTable);
    await restoran.save();
    return newTable;
  }

  findAll() {
    return this.tableModel.find().populate("restoran_id");;
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
