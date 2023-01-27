import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { Logger, VersioningType } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new Logger(bootstrap.name)

  const port = process.env.PORT || 3003
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  app.enableVersioning({
    defaultVersion: process.env.DEFAULT_API_VERSION,
    type: VersioningType.URI
  })

  await app
    .listen(port, '0.0.0.0')
    .then(() => logger.log(`Asset service version ${process.env.DEFAULT_API_VERSION} is running on port ${port}`))
    .catch((error) => logger.error(error))
}
bootstrap()
