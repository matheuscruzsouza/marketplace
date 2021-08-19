import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {
  create,
  getNumericDate,
  Header,
  Payload,
} from "https://deno.land/x/djwt@v2.3/mod.ts";
import { users, key, User } from "../environment.ts";

const jwtHeader: Header = {
  alg: "HS512",
  typ: "JWT",
};

const buildPayload = (user: User): Payload => {
  return {
    iss: user.username,
    exp: getNumericDate(60 * 60),
  };
};

const buildResponse = (ctx: Context, body: any, status: number) => {
  ctx.response.status = status;
  ctx.response.body = body;
};

export const login = async (ctx: Context) => {
  const result = ctx.request.body({ type: "json" });
  const value = await result.value;

  for (const user of users) {
    if (value.username === user.username && value.password === user.password) {
      const jwt = await create(jwtHeader, buildPayload(user), key);

      if (jwt) {
        const response = {
          id: user.id,
          username: user.username,
          jwt,
        };

        buildResponse(ctx, response, 200);
      } else {
        const response = {
          message: "Internal server error",
        };

        buildResponse(ctx, response, 500);
      }
      return;
    }
  }

  const response = {
    message: "Invalid username or password",
  };

  buildResponse(ctx, response, 422);
};
