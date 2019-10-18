import { ProductModel } from '../../../../core/models/product.interface';
import { Component, OnInit, Input } from '@angular/core';
import { PriceModel } from 'src/app/core/models/price.interface';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {

  @Input() showHistoric: boolean;
  @Input() product: ProductModel;
  @Input() prices: PriceModel[];

  constructor() { }
}
