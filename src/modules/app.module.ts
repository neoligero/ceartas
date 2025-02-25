import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BrandScoreModule } from './brand-score/brand-score.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BrandScoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
