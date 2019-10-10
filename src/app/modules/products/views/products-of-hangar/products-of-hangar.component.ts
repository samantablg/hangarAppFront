import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductService } from '../../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductOfHangarService } from 'src/app/core/services/product-of-hangar.service';
import { ProductOfHangarExtendedModel } from 'src/app/core/models/product-hangar-extended.interface';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent implements OnInit {

  productsOfHangarExtended: ProductOfHangarExtendedModel[] = [];
  isProductInsert = false;
  isAmountModify = false;
  idProduct: number;
  product: ProductModel;
  isHangarEmpty = false;
  idHangar: number;

  constructor(private productOfHangarService: ProductOfHangarService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.idHangar = data.id;
        this.productOfHangarService.isHangarNotEmpty(this.idHangar)
        .subscribe(response => {
          if (response) {
            this.productOfHangarService.loadRelationshipsExtended(this.idHangar)
            .subscribe( resp => {
              this.productsOfHangarExtended = resp;
            });
          } else {
            this.isHangarEmpty = true;
          }
        });
    });
  }

  linkToHangar() {
    this.isProductInsert = !this.isProductInsert;
  }

  seeProduct(id: number) {
    this.productService.loadProductById(id)
    .subscribe( data => {
      this.product = data;
    });
    if (this.product) {
      this.router.navigate(['products/product', id]);
    }
  }

  modifyAmount(product: number) {
    this.idProduct = product;
    this.isAmountModify = !this.isAmountModify;
  }

  deleteRelationship(productOfHangar: ProductOfHangarModel) {
    this.productOfHangarService.unlinkProductOfHangar(productOfHangar)
    .subscribe( response => {
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
