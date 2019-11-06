import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';

@Component({
  selector: 'app-products-order',
  templateUrl: './products-order.component.html',
  styleUrls: ['./products-order.component.css']
})
export class ProductsOrderComponent implements OnInit {

  @Input() products: ProductOfOrderModel[];
  @Input() url: string;
  @Output() removeProductToShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() increaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() decreaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() getProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
