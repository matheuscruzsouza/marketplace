import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { getContext } from "./auth/auth.ts";
import CartService from "./src/service/cart.service.ts";
import ProductService from "./src/service/product.service.ts";
import UserService from "./src/service/user.service.ts";

export const guest = (ctx: Context) => {
  ctx.response.body = "Guest success";
};

export const auth = (ctx: Context) => {
  ctx.response.body = "Auth success";
};

export const getProducts = (ctx: Context) => {
  ctx.response.body = ProductService.getProducts();
};

export const getCart = (ctx: Context) => {
  const params: any = getContext(ctx);

  if (!params) {
    return;
  }

  const user = UserService.getUser(`${params.id}`);

  ctx.response.body = CartService.getCart(user);
};
