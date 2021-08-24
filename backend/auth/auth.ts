import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {
  create,
  decode,
  getNumericDate,
  Header,
  Payload,
} from "https://deno.land/x/djwt@v2.3/mod.ts";
import { key } from "./auth.helper.ts";
import { User } from "../src/model/user.ts";
import UserService from "../src/service/user.service.ts";

const jwtHeader: Header = {
  alg: "HS512",
  typ: "JWT",
};

const buildPayload = (user: User): Payload => {
  return {
    id: user.id,
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

  for (const user of UserService.getUsers()) {
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

export const getContext = (ctx: Context) => {
  const headers: Headers = ctx.request.headers;

  const authorization = headers.get("Authorization");
  const jwt = authorization?.split(" ")[1];

  if (!jwt) {
    return;
  }

  const [header, payload, signature] = decode(jwt);

  return payload;
};
