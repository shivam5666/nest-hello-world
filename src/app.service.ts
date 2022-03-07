import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello khagesh :) how are you ?';
  }

  getPing(): string {
    return 'Pong!';
  }
}
