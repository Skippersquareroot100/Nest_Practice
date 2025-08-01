import { CreateDTO } from '../DTOs/Create.DTO';

export interface NameCreationStrategy {
  create(data: CreateDTO): Promise<void>;
}
