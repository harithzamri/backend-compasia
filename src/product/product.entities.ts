import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'price',
  })
  price: number;

  @Column({
    name: 'image',
    nullable: true,
  })
  image: string;

  @Column({
    name: 'color',
    nullable: true,
  })
  color: string;

  @Column({
    name: 'brand',
  })
  brand: string;

  @Column({
    name: 'category',
  })
  category: string;
}
