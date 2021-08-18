import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "../../models/Product";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input("product") product = Product.NULL;

  detail = false;

  @Output() buy = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBuy() {
    this.buy.emit({ quantidade: 2 });
    this.detail = false;
  }
}
