import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Manager, managerSchema } from './schemas/manager.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Manager.name,
        schema: managerSchema,
      },
    ]),
  ],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
