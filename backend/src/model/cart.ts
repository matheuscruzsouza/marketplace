import { CartItem } from "./cartItem.ts";
import { User } from "./user.ts";

export interface Cart {
  user: User;
  cartItems: CartItem[];
  total: number;
}
