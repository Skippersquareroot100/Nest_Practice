import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [forwardRef(() => AuthModule)], // Importing AuthModule to use AuthService
  exports: [UsersService],
})
export class UsersModule {}
