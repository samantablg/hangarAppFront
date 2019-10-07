import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductModel[];
  @Output() getProduct = new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit() {
  }

}
