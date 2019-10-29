import { ProductOfOrderModel } from './../../../../core/models/product-of-order.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-commerce',
  templateUrl: './product-card-commerce.component.html',
  styleUrls: ['./product-card-commerce.component.css']
})
export class ProductCardCommerceComponent implements OnInit {

  @Input() product?: ProductModel | ProductOfOrderModel;
  @Input() isOrder: boolean;
  @Output() addProductToShoppingCart = new EventEmitter<ProductModel>();
  @Output() increaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() decreaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() removeProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() getProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

}
