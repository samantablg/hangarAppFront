import { ProductService } from '../../../../core/services/product.service';
import { ProductModel } from '../../../../core/models/product.interface';
import { Component, OnInit, Input } from '@angular/core';
import { PriceModel } from 'src/app/core/models/price.interface';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  @Input() showHistoric: boolean;
  @Input() product: ProductModel;
  prices: PriceModel[] = [];

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.productService.loadPricesOfProduct(this.product.id)
    .subscribe( data => {
      this.prices = data;
    });
  }
}
