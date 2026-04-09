import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Avoid 304 + empty body on repeat GETs (Express ETags + If-None-Match).
  app.getHttpAdapter().getInstance().set('etag', false);
  app.enableCors({ origin: true });
  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT ?? 3001);
  await app.listen(port);
}
bootstrap();
