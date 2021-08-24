import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { verify } from "https://deno.land/x/djwt@v2.3/mod.ts";
import { key } from "./auth.helper.ts";

const authMiddleware = async (ctx: Context, next: any) => {
  const headers: Headers = ctx.request.headers;

  const authorization = headers.get("Authorization");
  const jwt = authorization?.split(" ")[1];

  if (authorization && jwt) {
    try {
      if (await verify(jwt, key)) {
        await next();
        return;
      }
    } catch (error) {
      ctx.response.status = 401;
      ctx.response.body = { message: "Invalid jwt token" };
    }
  }
};

export default authMiddleware;
