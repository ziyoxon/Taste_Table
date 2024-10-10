import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, clietnSchema } from './schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Client.name,
        schema: clietnSchema,
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
