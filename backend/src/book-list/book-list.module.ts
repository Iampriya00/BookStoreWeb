import { Module } from '@nestjs/common';
import { BookListService } from './book-list.service';
import { BookListController } from './book-list.controller';
import { Book } from './entities/book-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])
],
  controllers: [BookListController],
  providers: [BookListService],
})
export class BookListModule {}
