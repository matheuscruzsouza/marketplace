export const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"]
);

export interface User {
  id: string;
  username: string;
  password: string;
}

export const users: Array<User> = [
  {
    id: "1",
    username: "brad",
    password: "brad",
  },
  {
    id: "2",
    username: "max",
    password: "max",
  },
];
