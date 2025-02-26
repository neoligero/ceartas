import { Module } from '@nestjs/common';
import { BrandScoreController } from './infrastructure/brand-score.controller';
import { BrandScoreService } from './application/brand-score.service';

@Module({
  imports: [],
  controllers: [BrandScoreController],
  providers: [BrandScoreService],
})

export class BrandScoreModule { }
