import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  PRODUTOS = [
    new Product("Cimento Nassau", 25.9, 45, "25 Kg"),
    new Product("Cimento CSN", 22.3, 20, undefined, "2 left"),
    new Product("Liga Original", 12.0, 120),
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
    Product.NULL,
  ];

  constructor() {}

  getAll() {
    return from(
      new Promise<Product[]>((resolve) => resolve(this.PRODUTOS))
    );
  }
}
