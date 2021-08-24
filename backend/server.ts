import { Application, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { login } from "./auth/auth.ts";
import authMiddleware from "./auth/authMiddleware.ts";
import { auth, getCart, getProducts, guest } from "./routes.ts";

import { handleConnection } from "./websocket/websocket.ts";

const app = new Application();
const router = new Router();
const PORT = 3000;

router
  .get("/auth", authMiddleware, auth)
  .get("/guest", guest)
  .get("/products", getProducts)
  .get("/ws", handleConnection)
  .post("/cart", authMiddleware, getCart)
  .post("/login", login);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: PORT });
