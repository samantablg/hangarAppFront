import { HangarService } from './../../../../core/services/hangar.service';
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

  products: ProductModel[] = [];
  scrollProducts: ProductModel[] = [];
  product: ProductModel;
  hangars: BasicHangarModel[] = [];
  hangar: BasicHangarModel;
  page = 0;
  items = 6;
  totalElements: number;
  totalPages: number;

  constructor( private productService: ProductService,
               private comService: CommunicationService,
               private router: Router,
               private hangarService: HangarService ) { }

  ngOnInit() {
    this.productService.loadProductsPage(this.page, this.items).subscribe( data => {
      this.products = data['content'];
      this.totalElements = data['totalElements'];
      this.totalPages = data['totalPages'];
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
    this.hangarService.loadBasicInfoHangars().subscribe( data => {
        this.hangars = data;
    });
  }

  viewProductsOfHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.comService.setData(this.hangar);
    this.router.navigate(['/products/hangar', id + 1]);
  }

  onScroll() {
    this.page++;
    if (this.page < this.totalElements / this.items ) {
      this.productService.loadProductsPage(this.page, this.items).subscribe( data => {
        this.scrollProducts = data['content'];
        this.products.push(...this.scrollProducts);
      });
    } else {
      this.page = this.totalPages - 1;
    }
  }

}
