import { CommunicationService } from './../../../../core/services/communication.service';
import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { ProductService } from '../../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[] = [];
  private product: ProductModel;
  hangars: BasicHangarModel[] = [];
  hangar: BasicHangarModel;

  constructor( private productService: ProductService, private comService: CommunicationService, private router: Router ) { }

  ngOnInit() {
    this.productService.loadProducts().subscribe( data => {
      this.products = data;
    });
  }

  getProduct( id: number ) {
    this.product = this. products[id];
    this.comService.setData(this.product);
    this.router.navigate(['/products/product', id + 1]);
  }

  insertProduct() {
    this.router.navigate(['products/new']);
  }


  getHangars() {
    this.hangars = this.productService.getListhangars();
  }

  viewProductsOfHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.router.navigate(['/products/hangar', id + 1], { state: {data: this.hangar}});
  }

}
