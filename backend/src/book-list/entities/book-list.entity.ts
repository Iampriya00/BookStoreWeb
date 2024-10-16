import { Exclude } from 'class-transformer';
import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  bookName: string;

  @Column({ nullable: true })
  category: string;

  @Column({ default: 1 })
  quantity?: number;

  @Column({ unique: true })
  authorName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Category, (category) => category.bookLists)
  Category: Category;

  constructor(partial: Partial<Book>) {
    Object.assign(this, partial);
  }
}
