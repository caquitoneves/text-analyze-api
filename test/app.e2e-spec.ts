import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Text Analyzer (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/analyze (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/analyze')
      .send({ text: 'Hoje foi um ótimo dia!' });

    expect(response.status).toBe(201); // Pode vir 200, ajustar conforme necessidade
    expect(response.body).toHaveProperty('language');
    expect(response.body).toHaveProperty('sentiment');
    expect(response.body).toHaveProperty('summary');
    expect(response.body).toHaveProperty('keywords');
  });
});
