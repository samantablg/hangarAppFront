import { ProductService } from './../../../../core/services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductToHangarService } from 'src/app/core/services/product-hangar.service';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent implements OnInit {

  @Input() hangar: any;
  productsOfHangar: ProductOfHangarModel[] = [];
  insertProduct = true;

  constructor(private productService: ProductService, private router: Router) {
    this.hangar = this.router.getCurrentNavigation().extras.state.data;
    this.insertProduct = false;
  }

  ngOnInit() {
    this.productService.loadRelationships(this.hangar[0]).subscribe( data => {
      this.productsOfHangar = data;
    });
  }

  linkToHangar() {
    console.log('clicked');
    this.insertProduct = !this.insertProduct;
  }

}
