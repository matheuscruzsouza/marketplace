export class User {
  constructor(
    public name: string,
    public username: string,
    public password: string,
    public type: string
  ) {}

  static NONE = new User(
    "Nenhum usuário selecionado",
    "admin",
    "admin",
    "consumer"
  );
}
