import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: ProductModel;
  @Input() isDetails: boolean;
  @Output() deleteProduct = new EventEmitter();
  @Output() editProduct = new EventEmitter();
  @Output() addPrice = new EventEmitter();
  @Output() getPrices = new EventEmitter();

  constructor() { }
}
