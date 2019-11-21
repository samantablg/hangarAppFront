import { ProductOfOrderModel } from '../../../../core/models/product-of-order.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-order',
  templateUrl: './product-card-order.component.html',
  styleUrls: ['./product-card-order.component.css']
})
export class ProductCardOrderComponent implements OnInit {

  @Input() product: ProductOfOrderModel;
  @Input() nameProduct?: string;
  @Output() increaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() decreaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() removeProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() getProduct = new EventEmitter<number>();
  /* @Output() getNameProduct = new EventEmitter<number>(); */

  constructor() { }

  /* resolve() {
    this.getNameProduct.emit(this.product.product_id);
  } */

  ngOnInit() {}

}
