import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";

export const guest = (ctx: Context) => {
  ctx.response.body = "Guest success";
};

export const auth = (ctx: Context) => {
  ctx.response.body = "Auth success";
};
