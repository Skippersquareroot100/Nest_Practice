import { Inject, Injectable } from '@nestjs/common';
import { GetByNameStrategy } from '../Stratigies/getByName.strategy';

@Injectable()
export class GetByNameService {
  constructor(
    @Inject('GetByNameStrategy')
    private readonly strategy: GetByNameStrategy,
  ) {}

  async getServiceBySubstring(name: string): Promise<string[]> {
    return await this.strategy.getServiceBySubstring(name);
  }
}
