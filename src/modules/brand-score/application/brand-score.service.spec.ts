import { Test, TestingModule } from '@nestjs/testing';
import { BrandScoreService } from './brand-score.service';
import { ConfigModule } from '@nestjs/config';

describe('BrandScoreService', () => {
  let service: BrandScoreService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
      ],
      providers: [BrandScoreService],
    }).compile();

    service = app.get<BrandScoreService>(BrandScoreService);
  });

  describe('root', () => {
    it('should return "score!"', () => {
      expect(service.invoke({ username: 'Oktokuro' })).toBe('score!');
    });
  });
});
