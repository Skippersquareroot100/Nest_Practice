import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PracticeService } from './practice.service';
import { CreateUserDto } from './DTOs/create-user.dto';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get(':id')
  getPractice(@Param('id', ParseIntPipe) id: number) {
    return this.practiceService.getPractice(id);
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
    console.log(user);
    return 'User created successfully';
  }

  @Patch()
  updateUser(@Body() user: CreateUserDto) {
    console.log(user);
    return 'User updated successfully';
  }
}
