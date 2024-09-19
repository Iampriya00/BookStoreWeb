import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookListDto } from './dto/create-book-list.dto';
import { UpdateBookListDto } from './dto/update-book-list.dto';
import { Book } from './entities/book-list.entity';
@Injectable()
export class BookListService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookListDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
    return book;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    const bookList = await this.bookRepository.findOne({
      where: { id },
    });

    if (!bookList) {
      throw new NotFoundException(`Book with name ${id} not found`);
    }

    return bookList;
  }

  async update(
    id: number,
    updateBookListDto: UpdateBookListDto,
  ): Promise<Book> {
    const book = await this.findOne(id);
    this.bookRepository.merge(book, updateBookListDto);
    return this.bookRepository.save(book);
  }

  async delete(id: number): Promise<void> {
    const book = await this.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with name ${id} not found`);
    }
    await this.bookRepository.remove(book);
  }
}
