import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    name: 'productId',
  })
  productId: number;

  @Column({
    name: 'brand',
  })
  brand: string;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'order_status',
  })
  order_status: string;

  @CreateDateColumn()
  created_at: Date;
}
