import { Injectable } from '@nestjs/common';

@Injectable()
export class PracticeService {
  getPractice(id: number): string {
    return `Practice with ID: ${id}`;
  }
}
