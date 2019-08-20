import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductService } from '../../../../core/services/product.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel;
  insertPrice = true;
  showHistoric = true;

  constructor(private comService: CommunicationService, private router: Router) { }

  ngOnInit() {
    this.product = this.comService.getData();
    this.insertPrice = false;
    this.showHistoric = false;
  }

  public addPrice() {
    this.insertPrice = !this.insertPrice;
  }

  public getPrices() {
    this.showHistoric = !this.showHistoric;
  }

  public editProduct() {
    this.comService.setData(this.product);
    this.router.navigate(['/products/modify']);
  }

}
