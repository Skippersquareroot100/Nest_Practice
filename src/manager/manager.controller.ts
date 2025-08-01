import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ManagerService } from './Services/manager.service';
import { CreateDTO } from './DTOs/Create.DTO';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createManager(@Body() data: CreateDTO) {
    await this.managerService.createManager(data);
    return { message: 'Manager created successfully' };
  }
}
