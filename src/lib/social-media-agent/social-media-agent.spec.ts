import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { SocialMediaAgent } from './social-media-agent';

describe('BrandScoreService', () => {
  let client: SocialMediaAgent;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
      ],
      providers: [SocialMediaAgent],
    }).compile();

    client = app.get<SocialMediaAgent>(SocialMediaAgent);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(client).toBeDefined();
    });
  });
});
