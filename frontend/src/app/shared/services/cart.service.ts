import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  CART: CartItem[] = [];

  constructor() {}

  addProduct(item: Product, quantidade: number) {
    this.CART.push(new CartItem(item, quantidade));
    return this.getCart();
  }

  updateProduct(item: Product, quantidade: number) {
    let exists = item.quantity <= 0;

    this.CART.forEach((obj, index, array) => {
      if (item.quantity > 0 && obj.product.name === item.name) {
        array[index].quantity += quantidade;
        exists = true;
      }
    });

    if (!exists) {
      this.addProduct(item, quantidade);
    }

    return this.getCart();
  }

  getCart() {
    return from(
      new Promise<CartItem[]>((resolve) => resolve(this.CART))
    );
  }
}
