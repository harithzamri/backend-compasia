import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './order.entities';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/')
  async createOrder(
    @Body() createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    const order = await this.orderService.createOrder(createOrderInput);
    return order;
  }

  @Get('/')
  async getOrder() {
    return await this.orderService.getOrder();
  }
}
