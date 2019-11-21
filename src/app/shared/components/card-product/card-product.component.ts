import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Input() buttonAction: string;
  @Output() productAction = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() { }

}
