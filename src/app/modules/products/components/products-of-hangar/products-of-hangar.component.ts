import { ProductModel } from './../../../../core/models/product.interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent implements OnInit {

  @Input() hangar: any;
  productsOfHangar: ProductOfHangarModel[] = [];
  products: ProductModel[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.hangar = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit() {
    this.productService.loadRelationships(this.hangar[0]).subscribe( data => {
      this.productsOfHangar = data;
    });
  }

}
