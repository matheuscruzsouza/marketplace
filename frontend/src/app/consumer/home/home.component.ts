import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { tap } from "rxjs/operators";
import { Product } from "src/app/shared/models/Product";
import { CartService } from "src/app/shared/services/cart.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public produtos: Product[];

  constructor(
    private service: ProductService,
    private cartService: CartService
  ) {
    this.produtos = [];
  }

  ngOnInit(): void {
    this.service
      .getAll()
      .pipe(
        tap((produtos) => {
          this.produtos = produtos;
          return produtos;
        })
      )
      .subscribe();
  }

  addToCart(product: Product, quantidade: number) {
    this.cartService.updateProduct(product, quantidade);
    console.log(this.cartService.CART);
  }
}
