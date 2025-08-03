import { CreateDTO } from '../DTOs/Create.DTO';

export interface GetByUsernameStrategy {
  getByUsername(uname: string): Promise<CreateDTO>;
}
