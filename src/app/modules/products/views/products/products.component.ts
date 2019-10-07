import { HangarService } from './../../../../core/services/hangar.service';
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
  hangars: BasicHangarModel[];
  page = 0;
  items = 6;
  totalElements: number;
  totalPages: number;

  constructor( private productService: ProductService,
               private router: Router,
               private hangarService: HangarService ) { }

  ngOnInit() {
    this.productService.loadProductsPage(this.page, this.items).subscribe( data => {
      this.products = data['content'];
      this.totalElements = data['totalElements'];
      this.totalPages = data['totalPages'];
    });
    if (!this.products) {
      this.router.navigate(['']);
    }
  }

  getProduct( product: ProductModel ) {
    this.router.navigate(['/products/product', product.id]);
  }

  insertProduct() {
    this.router.navigate(['products/new']);
  }

  getHangars() {
    this.hangarService.loadBasicInfoHangars()
    .subscribe( data => {
      this.hangars = data;
    });
  }

  viewProductsOfHangar( hangar: BasicHangarModel ) {
    console.log(hangar.id);
    this.router.navigate(['/products/hangar', hangar.id]);
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
