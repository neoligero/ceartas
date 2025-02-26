import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { ConfigModule } from '@nestjs/config';
import { BrandScoreModule } from '../src/modules/brand-score/brand-score.module';

describe('BrandScoreController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        BrandScoreModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/brand-score/analyze-social-media (POST)', () => {
    return request(app.getHttpServer())
      .post('/brand-score/analyze-social-media')
      .send({ username: 'Oktokuro' })
      .expect(200)
      .expect('{"data":"fake-result"}');
  });
});
