import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductService } from '../../../../core/services/product.service';
import { Component, OnInit, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent implements OnInit {

  hangar: any;
  productsOfHangar: ProductOfHangarModel[] = [];
  insertProduct = true;

  constructor(private productService: ProductService, private comService: CommunicationService, private router: Router) {
    this.hangar = this.comService.getData();
    this.insertProduct = false;
  }

  ngOnInit() {
    this.productService.loadRelationships(this.hangar[0]).subscribe( data => {
      this.productsOfHangar = data;
    });
  }

  linkToHangar() {
    this.insertProduct = !this.insertProduct;
  }

}
