export class Product {
  constructor(
    public name: string = "Nome não cadastrado",
    public value: number = 0,
    public quantity: number = 0,
    public weight: string = "",
    public obs: string = "",
    public image: string = "assets/images/logo-icon-gray.png"
  ) {}

  static NULL = new Product();
}
