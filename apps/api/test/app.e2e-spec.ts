import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Village API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('GET /api/ingredients returns seed data', () => {
    return request(app.getHttpServer())
      .get('/api/ingredients')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('name');
      });
  });

  it('GET /api/dashboard/summary', () => {
    return request(app.getHttpServer())
      .get('/api/dashboard/summary')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('totalIngredientKinds');
        expect(res.body).toHaveProperty('totalStockUnits');
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
