import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);
    return category;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    const bookCategory = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!bookCategory) {
      throw new NotFoundException(`Book category with ID #${id} not found`);
    }
    return bookCategory;
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const updateCategory = await this.findOne(id);
    this.categoryRepository.merge(updateCategory, updateCategoryDto);
    return this.categoryRepository.save(updateCategory);
  }

  async remove(id: number): Promise<void> {
    const deletecategory = await this.findOne(id);
    if (!deletecategory) {
      throw new NotFoundException(`Book with name ${id} not found`);
    }
    await this.categoryRepository.remove(deletecategory);
  }
}
