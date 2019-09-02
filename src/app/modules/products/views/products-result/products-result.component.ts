import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-result',
  templateUrl: './products-result.component.html',
  styleUrls: ['./products-result.component.css']
})
export class ProductsResultComponent implements OnInit {

  products: ProductModel[] = [];
  product: ProductModel;
  existProductOfSearch: boolean;

  constructor(private comService: CommunicationService, private router: Router) {
    this.products = this.comService.getDataRelativeToProduct();
    if (this.products !== undefined && this.products.length > 0) {
      this.existProductOfSearch = true;
    } else {
      this.existProductOfSearch = false;
    }
   }

  ngOnInit() {
  }

  getProduct( id: number ) {
    this.product = this.products[id];
    this.comService.setData(this.product);
    this.router.navigate(['hangars/hangar', id + 1]);
  }

}
