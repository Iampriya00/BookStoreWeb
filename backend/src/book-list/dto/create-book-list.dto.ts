import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateBookListDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  bookName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  authorName: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  quantity?: number;
}
