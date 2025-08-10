import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserParamDto } from './DTOs/get-user-param.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ): any[] | string {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  getUserById(id: number): any {
    return this.usersService.getUserById(id);
  }
}
