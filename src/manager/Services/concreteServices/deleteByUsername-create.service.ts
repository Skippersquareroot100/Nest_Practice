import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { DeleteByUsernameStrategy } from 'src/manager/Stratigies/deleteByUsername.strategy';

@Injectable()
export class DeleteByUsernameCreateService implements DeleteByUsernameStrategy {
  constructor(private readonly dataSource: DataSource) {}
  async deleteByUsername(uname: string): Promise<void> {
    await this.dataSource.query(`CALL delete_manager_by_username($1)`, [uname]);
    console.log(`Manager with username ${uname} deleted successfully.`);
  }
}
