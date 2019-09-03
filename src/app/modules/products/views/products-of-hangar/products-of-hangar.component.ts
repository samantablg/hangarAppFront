import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductService } from '../../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductWithNameOfHangarModel } from 'src/app/core/models/product-hangar-extended.interface';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent implements OnInit {

  hangar: BasicHangarModel;
  productsWithNameOfHangar: ProductWithNameOfHangarModel[] = [];
  productsOfHangar: ProductOfHangarModel[] = [];
  isProductInsert: boolean;
  isAmountModify: boolean;
  idProduct: number;
  product: ProductModel;
  isHangarEmpty: boolean;
  productOfHangar: ProductOfHangarModel;

  constructor(private productService: ProductService, private comService: CommunicationService, private router: Router) {
    this.isProductInsert = false;
    this.isAmountModify = false;
    this.hangar = this.comService.getDataRelativeToHangar();
  }

  ngOnInit() {
    if (this.hangar) {
      this.productService.loadRelationshipsWithNameOfProduct(this.hangar.id).subscribe( data => {
        this.productsWithNameOfHangar = data;
        this.isHangarEmpty = !(this.productsWithNameOfHangar.length > 0);
      }, err => {
        this.isHangarEmpty = true;
      });
    } else {
      this.router.navigate(['products']);
    }
  }

  linkToHangar() {
    this.isProductInsert = !this.isProductInsert;
  }

  seeProduct(id: number) {
    this.productService.getProductById(id).subscribe( data => {
      this.product = data;
    });
    if (this.product) {
      this.comService.setDataRelativeToProduct(this.product);
      this.router.navigate(['products/product', id]);
    }
  }

  modifyAmount(product: number) {
    this.idProduct = product;
    this.isAmountModify = !this.isAmountModify;
  }

  deleteRelationship(productOfHangar: ProductOfHangarModel) {
    this.productService.unlinkProductOfHangar(productOfHangar).subscribe( response => {
      if (response) {
        window.alert('borrado');
        this.router.navigate(['products']);
      } else {
        window.alert('fail');
      }
    }, err => {
      window.alert(err);
    });
  }

}
