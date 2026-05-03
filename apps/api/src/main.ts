import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { API_ARTIFICIAL_DELAY_MS } from './constants/api.constants';
import { NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(async (_req: Request, _res: Response, next: NextFunction) => {
    if (API_ARTIFICIAL_DELAY_MS <= 0) {
      next();
      return;
    }

    await new Promise((resolve) =>
      setTimeout(resolve, API_ARTIFICIAL_DELAY_MS),
    );
    next();
  });

  // Avoid 304 + empty body on repeat GETs (Express ETags + If-None-Match).
  app.getHttpAdapter().getInstance().set('etag', false);
  app.enableCors({ origin: true });
  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT ?? 3001);
  await app.listen(port);
}

bootstrap();
