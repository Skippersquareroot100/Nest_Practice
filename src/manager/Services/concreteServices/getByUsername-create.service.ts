
import { Injectable } from '@nestjs/common';
import { GetByUsernameStrategy } from '../../Stratigies/getByUsername.strategy';
import { DataSource } from 'typeorm';
import { CreateDTO } from '../../DTOs/Create.DTO';
@Injectable()
export class GetByUsernameCreateService implements GetByUsernameStrategy {
  constructor(private datasource: DataSource) {}
  async getByUsername(uname: string): Promise<CreateDTO> {
    const result = await this.datasource.query(
      `SELECT * FROM get_by_username($1)`,
      [uname],
    );
    console.log(result);
    // return result[0];
    return result;
  }
}
