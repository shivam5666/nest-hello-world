import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello appinfotech';
  }

  getPing(): string {
    return 'Pong!';
  }
}
