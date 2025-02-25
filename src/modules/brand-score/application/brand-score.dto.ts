import { IsAlphanumeric, IsNotEmpty, Length, } from 'class-validator';
import { BrandScoreServiceParams } from './brand-score.service';

export class BrandScoreRequestDto implements BrandScoreServiceParams {
  @IsNotEmpty()
  @Length(2, 16)
  @IsAlphanumeric()
  readonly username: string;
}