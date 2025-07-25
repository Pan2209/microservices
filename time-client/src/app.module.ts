import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
  ClientsModule.register([
    {
      name: 'TIME_SERVICE',
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    },
  ]),
],
  controllers: [AppController],
})
export class AppModule {}
