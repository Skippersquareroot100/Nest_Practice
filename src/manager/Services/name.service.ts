import { Inject, Injectable } from '@nestjs/common';
import { CreateDTO } from '../DTOs/Create.DTO';
import { NameCreationStrategy } from '../Stratigies/name.stategy';

@Injectable()
export class NameService {
  constructor(
    @Inject('NameCreationStrategy') 
    private readonly strategy: NameCreationStrategy,
  ) {}

  async create(data: CreateDTO): Promise<void> {
    await this.strategy.create(data);
  }
}
