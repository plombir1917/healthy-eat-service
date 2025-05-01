import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Healthy Eat Service API')
    .setDescription('API документация для сервиса здорового питания')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Аутентификация и авторизация')
    .addTag('patients', 'Управление пациентами')
    .addTag('doctors', 'Управление врачами')
    .addTag('illnesses', 'Управление заболеваниями')
    .addTag('symptoms', 'Управление симптомами')
    .addTag('diets', 'Управление диетами')
    .addTag('recommendations', 'Управление рекомендациями')
    .addTag('characteristics', 'Управление характеристиками')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('healthy-eat/api', app, document);

  app.enableCors();
  app.setGlobalPrefix('healthy-eat');
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
