import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() buttonAction: string;
  @Input() products: ProductModel[];
  @Output() productAction = new EventEmitter<ProductModel>();
  @Output() productsNotLoad = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.products === undefined) {
      this.productsNotLoad.emit();
    }

  }
}
