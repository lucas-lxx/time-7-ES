import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Coletivo example")
    .setDescription("The coletivo API description")
    .setVersion("1.0")
    .addTag("coletivo")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Enter JWT token like: Bearer <token>"
      },
      "access-token"
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
