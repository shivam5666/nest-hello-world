import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello SHIVAM';
  }

  getPing(): string {
    return 'Pong!';
  }
}
