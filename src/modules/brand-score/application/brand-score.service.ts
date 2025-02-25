import { Injectable } from '@nestjs/common';

export type BrandScoreServiceParams = {
  username: string;
}

@Injectable()
export class BrandScoreService {
  invoke(params: BrandScoreServiceParams): any {
    console.log(process.env.OPENAI_API_KEY);
    return 'score!';
  }
}
