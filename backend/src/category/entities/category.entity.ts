import { Book } from 'src/book-list/entities/book-list.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  categoryName: string;

  @ManyToMany(() => Book, (bookList) => bookList.category)
  bookLists: Book[];

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
