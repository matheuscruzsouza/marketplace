import { Cart } from "../model/cart.ts";
import { CartItem } from "../model/cartItem.ts";
import { User } from "../model/user.ts";

const getCart = (user: User): Cart => {
  return {
    user,
    cartItems: new Array<CartItem>(),
    total: 0,
  };
};

const CartService = {
  getCart,
};

export default CartService;
