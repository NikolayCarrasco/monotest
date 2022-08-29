import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PeopleModule } from './people/people.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    PeopleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
