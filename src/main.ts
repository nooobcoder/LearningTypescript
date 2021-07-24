import { Product } from './product.model';

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

// @ts-ignore
const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

// const loadedProducts = products.map((product) => new Product(product.title, product.price));
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const prod1 = new Product('A Book', 12.99);
// console.log(prod1.getInformation());
