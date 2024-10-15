import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BookListModule } from './book-list/book-list.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    BookListModule,
    CategoryModule,
    AuthModule,
  ],
})
export class AppModule {}
