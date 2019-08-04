import { ProductService } from '../../../../core/services/product.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: ProductModel;
  insertPrice = true;
  showHistoric = true;

  constructor(private productService: ProductService, private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state.data;
   }

  ngOnInit() {
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
    this.router.navigate(['/products/modify'], {state: {data: this.product}});
  }

}
