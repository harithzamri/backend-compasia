import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createProductInput } from './dto/create-product.input';
import { filterProductInput } from './dto/filter-product.input';
import { Product } from './product.entities';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  createProduct(createProductInput: createProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProduct);
  }

  async getFilteredProducts(
    filterProduct: filterProductInput,
  ): Promise<Product[]> {
    const { brand, category, name } = filterProduct;
    return this.productRepository.find({
      where: {
        brand,
        category,
        name,
      },
    });
  }

  async getAllProduct(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
