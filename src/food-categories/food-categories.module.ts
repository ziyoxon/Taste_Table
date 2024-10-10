import { Module } from '@nestjs/common';
import { FoodCategoriesService } from './food-categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FCategorie, fcategoriSchema } from './schemas/food-category.schema';
import { FoodCategoriesController } from './food-categories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FCategorie.name,
        schema: fcategoriSchema,
      },
      // {
      //   name: FCategorie.name,
      //   schema: fcategoriSchema,
      // },
    ]),
  ],
  controllers: [FoodCategoriesController],
  providers: [FoodCategoriesService],
})
export class FoodCategoriesModule {}
