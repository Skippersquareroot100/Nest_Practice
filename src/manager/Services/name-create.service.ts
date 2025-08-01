import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NameEntity } from '../Entities/name.entity';
import { Repository } from 'typeorm';
import { CreateDTO } from '../DTOs/Create.DTO';
import { ICreateName } from '../Interfaces/create-name.interface';
import { NameCreationStrategy } from '../Stratigies/name.stategy';

@Injectable()
export class NameCreateService implements ICreateName, NameCreationStrategy {
  constructor(
    @InjectRepository(NameEntity) private nameRepo: Repository<NameEntity>,
  ) {}

  async create(data: CreateDTO): Promise<void> {
    const entity = new NameEntity();
    entity.fullname = data.fullName;
    await this.nameRepo.save(entity);
  }
}
