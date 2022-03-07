import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world !!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
