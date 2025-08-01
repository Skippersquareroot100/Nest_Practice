import { Inject, Injectable } from '@nestjs/common';
import { CreateDTO } from '../DTOs/Create.DTO';
import { ManagerCreationStrategy } from '../Stratigies/manager.strategy';

@Injectable()
export class ManagerService {
  constructor(
    @Inject('ManagerCreationStrategy')
    private readonly strategy: ManagerCreationStrategy,
  ) {}

  async createManager(data: CreateDTO): Promise<void> {
    await this.strategy.create(data);
  }
}
