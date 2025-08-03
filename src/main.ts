import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
=======
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
>>>>>>> lab3
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
