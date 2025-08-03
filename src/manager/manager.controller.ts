import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ManagerService } from './Services/manager.service';
import { CreateDTO } from './DTOs/Create.DTO';
import { GetByNameService } from './Services/getByName.service';
import { GetByUsernameService } from './Services/getByUsername.service';
import { DeleteByUsernameService } from './Services/deleteByUsername.service';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly managerService: ManagerService,
    private readonly getByNameService: GetByNameService,
    private readonly getByUsernameService: GetByUsernameService,
    private readonly deleteByUsernameService: DeleteByUsernameService,
  ) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createManager(@Body() data: CreateDTO): Promise<{ message: string }> {
    await this.managerService.createManager(data);
    return { message: 'Manager created successfully' };
  }
  @Get()
  async getBySubstring(
    @Query('name') name: string,
  ): Promise<{ message: string; data: string[] }> {
    const result = await this.getByNameService.getServiceBySubstring(name);

    if (!result || result.length === 0) {
      throw new NotFoundException(`No results found for name: ${name}`);
    }
    return {
      message: `Results for name containing: ${name}`,
      data: result,
    };
  }
  @Get('/name/:uname')
  async getByUsername(
    @Param('uname') uname: string,
  ): Promise<{ message: string; data: CreateDTO }> {
    const result = await this.getByUsernameService.getByUsername(uname);
    return {
      message: `Results for username: ${uname}`,
      data: result,
    };
  }
  @Delete('/uname/:uname')
  async deleteByUsername(
    @Param('uname') uname: string,
  ): Promise<{ message: string }> {
    await this.deleteByUsernameService.deleteByUsername(uname);
    return { message: `User with username ${uname} deleted successfully` };
  }
}
