import "reflect-metadata";
import {} from "class-transformer";
import _ from "lodash";
import { Product } from "./product.model";

declare var GLOBAL: string;
console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());
