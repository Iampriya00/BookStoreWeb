import { Role } from '@/enums/role.enum';
import { Roles } from './../../decorators/roles.decorator';

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  phone_no?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsEnum(Role)
  role?: Role;
}
