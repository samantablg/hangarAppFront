import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = [];
  @Output() addProductToShoppingCart = new EventEmitter<ProductModel>();
  @Output() removeProductToShoppingCart = new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit() {
  }

}
