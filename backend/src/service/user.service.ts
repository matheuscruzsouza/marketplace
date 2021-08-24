import { User } from "../model/user.ts";

const USERS = [
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

const getUsers = (): User[] => {
  return USERS;
};

const getUser = (id: string): User => {
  return USERS.filter((user) => user.id == id)[0];
};

const UserService = {
  getUsers,
  getUser,
};

export default UserService;
