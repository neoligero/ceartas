import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { BrandScoreService } from '../application/brand-score.service';
import { BrandScoreRequestDto } from '../application/brand-score.dto';

@Controller('brand-score')
export class BrandScoreController {
  constructor(private readonly brandScoreService: BrandScoreService) { }

  @Post('/analyze-social-media')
  @HttpCode(200)
  analyze(@Body() body: BrandScoreRequestDto) {
    return this.brandScoreService.invoke({ username: body.username });
  }
}
