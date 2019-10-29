import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] | ProductOfOrderModel[];
  @Input() url: string;
  @Output() addProductToShoppingCart = new EventEmitter<ProductModel>();
  @Output() removeProductToShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() increaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() decreaseProductOfShoppingCart = new EventEmitter<ProductOfOrderModel>();
  @Output() productsNotLoaded = new EventEmitter();
  @Output() getProduct = new EventEmitter<number>();
  isOrder: boolean;

  constructor() { }

  ngOnInit() {
    if (this.products.length === 0) {
      this.productsNotLoaded.emit();
    }
    this.isOrder = this.url.includes('order');
  }

}
