import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: number;
  @IsString({ message: 'Name must be a string' })
  name: string;
  @IsOptional()
  gender?: string;
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
  @IsOptional()
  isMarried: boolean;
}
