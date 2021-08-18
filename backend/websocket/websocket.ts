import {
  acceptWebSocket,
  acceptable,
  WebSocket,
  isWebSocketCloseEvent,
} from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const users = new Map<string, WebSocket>();

export const handleConnection = async (ctx: any) => {
  if (acceptable(ctx.request.originalRequest)) {
    const request: any = ctx.request.originalRequest;
    const { conn, r: bufReader, w: bufWriter, headers } = request;
    const socket = await acceptWebSocket({
      conn,
      bufReader,
      bufWriter,
      headers,
    });

    await socketEventHandlers(socket);
  } else {
    throw new Error("Error when connecting websocket");
  }
};

export const socketEventHandlers = async (ws: WebSocket): Promise<void> => {
  // Register user connection
  const userId = v4.generate();

  users.set(userId, ws);
  await broadcast(
    JSON.stringify({ message: `User with the id ${userId} is connected` })
  );

  // Wait for new messages
  for await (const event of ws) {
    const message = typeof event === "string" ? event : "";

    await broadcast(message, userId);

    // Unregister user conection
    if (!message && isWebSocketCloseEvent(event)) {
      users.delete(userId);
      await broadcast(
        JSON.stringify({
          message: `User with the id ${userId} is disconnected`,
        })
      );
    }
  }
};

export const broadcast = (message: string, uid: string = ""): void => {
  users.forEach((conn: WebSocket, id: string) => {
    if (!conn.isClosed && uid !== id) {
      conn.send(message);
    }
  });
};
