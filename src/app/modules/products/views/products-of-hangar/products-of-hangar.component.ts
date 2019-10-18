import { Observable } from 'rxjs';
import { RouterFacade } from 'src/app/store/facade/router.facade';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';

@Component({
  selector: 'app-products-of-hangar',
  templateUrl: './products-of-hangar.component.html',
  styleUrls: ['./products-of-hangar.component.css']
})
export class ProductsOfHangarComponent {

  productsOfHangar: Observable<ProductOfHangarModel[]>;
  isAmountModify = false;
  idProduct: number;
  product: ProductModel;
  idHangar: number;
  productsUnlinkHangar: ProductModel[] | void;

  constructor(private routerFacade: RouterFacade,
              private productFacade: ProductFacade,
              private router: Router) {

                this.idHangar = this.routerFacade.id$;
                this.productsOfHangar = this.productFacade.productsOfHangar$;
                this.productsUnlinkHangar = this.productFacade.selectProductsUnlinkHangar(this.idHangar);

                this.productFacade.loadProductsOfHangar(this.idHangar);
              }

  getProduct(idProduct: number) {
    this.router.navigate(['/products/product', idProduct]);
  }

  modifyAmount(product: number) {
    this.idProduct = product;
    this.isAmountModify = !this.isAmountModify;
  }

  deleteRelationship(productOfHangar: ProductOfHangarModel) {
    this.productFacade.deleteProductOfHangar(productOfHangar);
  }

  saveProductHangar(productOfHangar: ProductOfHangarModel) {
    this.productFacade.saveProductOfHangar(productOfHangar);
  }

  updateProductHangar(productOfHangar: ProductOfHangarModel) {
    this.productFacade.editProductOfHangar(productOfHangar);
  }

}
