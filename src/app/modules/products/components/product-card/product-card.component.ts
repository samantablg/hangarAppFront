import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  @Input() isDetails: boolean;
  @Output() deleteProduct = new EventEmitter<ProductModel>();
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() addPrice = new EventEmitter<ProductModel>();
  @Output() getPrices = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
