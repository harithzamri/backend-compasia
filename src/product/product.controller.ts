import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { createProductInput } from './dto/create-product.input';
import { filterProductInput } from './dto/filter-product.input';
import { Product } from './product.entities';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  async addProduct(
    @Body() createProductInput: createProductInput,
  ): Promise<Product> {
    const product = await this.productService.createProduct(createProductInput);
    return product;
  }

  @Get('/')
  async getProduct(@Query() filterProduct: filterProductInput) {
    if (Object.keys(filterProduct).length) {
      const filteredProduct = await this.productService.getFilteredProducts(
        filterProduct,
      );
      return filteredProduct;
    } else {
      const allProduct = await this.productService.getAllProduct();
      return allProduct;
    }
  }
}
