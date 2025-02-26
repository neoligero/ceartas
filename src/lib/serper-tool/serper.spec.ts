import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { SerperClient } from './serper';

describe('BrandScoreService', () => {
  let client: SerperClient;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
      ],
      providers: [SerperClient],
    }).compile();

    client = app.get<SerperClient>(SerperClient);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(client).toBeDefined();
    });
  });
});
