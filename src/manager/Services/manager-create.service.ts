import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateDTO } from '../DTOs/Create.DTO';
import { SharedIdService } from './shared.service';
import { ICreateManager } from '../Interfaces/create-manager.interface';

@Injectable()
export class ManagerCreateService implements ICreateManager {
  constructor(private datasource: DataSource) {}
  async createManagerS(data: CreateDTO): Promise<void> {
    await this.datasource.query(
      `SELECT create_manager_with_name($1, $2, $3, $4)`,
      [
        SharedIdService.getId(),
        data.fullName,
        data.userName,
        data.isActive ?? false,
      ],
    );
  }
}
