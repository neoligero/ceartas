import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { OpenAILLM } from './openai';

describe('BrandScoreService', () => {
  let client: OpenAILLM;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
      ],
      providers: [OpenAILLM],
    }).compile();

    client = app.get<OpenAILLM>(OpenAILLM);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(client).toBeDefined();
    });
  });
});
