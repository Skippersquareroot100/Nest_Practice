import { Injectable } from '@nestjs/common';
import { DeleteByUsernameStrategy } from '../Stratigies/deleteByUsername.strategy';
import { Inject } from '@nestjs/common';
@Injectable()
export class DeleteByUsernameService {
  constructor(
    @Inject('DeleteByUsernameStrategy')
    private readonly startegy: DeleteByUsernameStrategy,
  ) {}
  async deleteByUsername(uname: string): Promise<void> {
    return await this.startegy.deleteByUsername(uname);
  }
}
