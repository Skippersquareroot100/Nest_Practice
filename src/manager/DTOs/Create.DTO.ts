import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDTO {
  @IsNotEmpty({ message: 'Full Name is required' })
  @IsString({ message: 'fullName must be a string' })
  @MaxLength(150, { message: 'Full Name must not exceed 150 characters' })
  fullName: string;

  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'userName must be a string' })
  @MaxLength(100, { message: 'Username must not exceed 100 characters' })
  userName: string;

  @IsNotEmpty({ message: 'Set Active Status is required' })
  @IsBoolean({ message: 'isActive must be a boolean value' })
  isActive: boolean;
}
