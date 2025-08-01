import { CreateDTO } from '../DTOs/Create.DTO';
export interface ManagerCreationStrategy {
  create(data: CreateDTO): Promise<void>;
}
