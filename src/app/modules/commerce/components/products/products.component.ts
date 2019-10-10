import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = [];
  @Output() addProductToShoppingCart = new EventEmitter<ProductModel>();
  @Output() removeProductToShoppingCart = new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit() {
  }

}
