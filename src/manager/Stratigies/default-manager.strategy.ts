import { Injectable } from '@nestjs/common';
import { ManagerCreationStrategy } from './manager.strategy';
import { NameService } from '../Services/name.service';
import { ManagerCreateService } from '../Services/concreteServices/manager-create.service';
import { CreateDTO } from '../DTOs/Create.DTO';

@Injectable()
export class DefaultManagerStrategy implements ManagerCreationStrategy {
  constructor(
    private readonly nameService: NameService,
    private readonly createManagerService: ManagerCreateService,
  ) {}

  async create(data: CreateDTO): Promise<void> {
    await this.nameService.create(data);
    await this.createManagerService.createManagerS(data);
  }
}
