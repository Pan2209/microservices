import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(
    @Inject('TIME_SERVICE') private client: ClientProxy,
  ) {}

  @Get('time')
  async getTime(): Promise<string> {
    try {
      const result = await this.client
        .send<string, any>({ cmd: 'get_time' }, {})
        .pipe(timeout(5000))
        .toPromise();
      console.log('Respuesta del servidor:', result);
      return typeof result === 'string' ? result : 'No time received';
    } catch (error) {
      console.error('Error al consultar la hora:', error);
      if (error instanceof Error) {
        console.error('Stack:', error.stack);
        console.error('Message:', error.message);
      }
      return 'Error al consultar la hora';
    }
  }
}
