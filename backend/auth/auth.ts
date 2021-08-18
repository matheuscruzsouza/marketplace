import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { create, getNumericDate } from "https://deno.land/x/djwt/mod.ts";
import { users, key } from "../environment.ts";

export const login = async (ctx: Context) => {
  const result = ctx.request.body({ type: "json" });
  const value = await result.value;

  console.log(value);

  for (const user of users) {
    if (
      value &&
      value.username === user.username &&
      value.password === user.password
    ) {
      const payload = {
        iss: user.username,
        exp: getNumericDate(60 * 60),
      };

      const jwt = await create(
        {
          alg: "HS512",
          typ: "JWT",
        },
        payload,
        key
      );

      if (jwt) {
        ctx.response.status = 200;
        ctx.response.body = {
          id: user.id,
          username: user.username,
          jwt,
        };
      } else {
        ctx.response.status = 500;
        ctx.response.body = {
          message: "Internal server error",
        };
      }
      return;
    }
  }

  ctx.response.status = 422;
  ctx.response.body = {
    message: "Invalid username or password",
  };
};
