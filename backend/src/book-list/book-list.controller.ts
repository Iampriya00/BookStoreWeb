import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookListService } from './book-list.service';
import { CreateBookListDto } from './dto/create-book-list.dto';
import { UpdateBookListDto } from './dto/update-book-list.dto';

@Controller('book-list')
export class BookListController {
  constructor(private readonly bookListService: BookListService) {}

  @Post()
  async create(@Body() createBookListDto: CreateBookListDto) {
    return await this.bookListService.create(createBookListDto);
  }

  @Get()
  async findAll() {
    const booksGet = await this.bookListService.findAll();
    return { booksGet };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.bookListService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookListDto: UpdateBookListDto,
  ) {
    return await this.bookListService.update(id, updateBookListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.bookListService.delete(id);
  }
}
