import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';

@Component({
  selector: 'app-products-of-hangar-list',
  templateUrl: './products-of-hangar-list.component.html',
  styleUrls: ['./products-of-hangar-list.component.css']
})
export class ProductsOfHangarListComponent implements OnInit {

  @Input() productsOfHangar: ProductOfHangarModel[];
  @Output() getProduct = new EventEmitter<number>();
  @Output() deleteRelationship = new EventEmitter<ProductOfHangarModel>();
  @Output() modifyAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
