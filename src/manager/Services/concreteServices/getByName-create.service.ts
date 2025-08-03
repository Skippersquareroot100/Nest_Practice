import { Injectable } from '@nestjs/common';
import { GetByNameStrategy } from '../../Stratigies/getByName.strategy';
import { DataSource } from 'typeorm';

@Injectable()
export class GetByNameCreateService implements GetByNameStrategy {
  constructor(private datasource: DataSource) {}
  async getServiceBySubstring(name: string): Promise<string[]> {
    const result = await this.datasource.query(
      `SELECT * FROM retrieve_by_substring($1)`,
      [name],
    );
    console.log(result.map((row) => row.fullname));
    return result.map((row) => row.fullname);
  }
}
