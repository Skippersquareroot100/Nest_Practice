import { Injectable, Inject } from '@nestjs/common';
import { GetByUsernameStrategy } from '../Stratigies/getByUsername.strategy';
import { CreateDTO } from '../DTOs/Create.DTO';

@Injectable()
export class GetByUsernameService {
  constructor(
    @Inject('GetByUsernameStrategy')
    private readonly strategy: GetByUsernameStrategy,
  ) {}

  async getByUsername(uname: string): Promise<CreateDTO> {
    return await this.strategy.getByUsername(uname);
  }
}
