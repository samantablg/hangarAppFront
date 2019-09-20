import { ProductService } from './../../../../core/services/product.service';
import { ProductModel } from '../../../../core/models/product.interface';
import { Component, OnInit, Input } from '@angular/core';
import { PriceModel } from 'src/app/core/models/price.interface';

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrls: ['./list-price.component.css']
})
export class ListPriceComponent implements OnInit {

  @Input() showHistoric: boolean;
  @Input() product: ProductModel;
  prices: PriceModel[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.loadPrices(this.product.id).subscribe( data => {
      this.prices = data;
    });
  }

}
