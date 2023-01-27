import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? ['.env.development', '.env']
          : process.env.NODE_ENV === 'production'
          ? ['.env.production', '.env']
          : ['.env.development.local', '.env'],
      isGlobal: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
