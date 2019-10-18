import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';
import { HangarFacade } from 'src/app/store/facade/hangar.facade';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  hangars$: Observable<HangarModel[]>;

  constructor(private router: Router,
              private productFacade: ProductFacade,
              private hangarFacade: HangarFacade) {
    this.products$ = this.productFacade.products$;
    this.loading$ = this.productFacade.loading$;
    this.error$ = this.productFacade.error$;

    this.productFacade.loadProducts();

   }

  insertProduct() {
    this.router.navigate(['products/new']);
  }

  getHangars() {
    this.hangars$ = this.hangarFacade.hangars$;
  }

  viewProductsOfHangar(hangar: HangarModel) {
    this.router.navigate(['/products/hangar', hangar.id]);
  }

  getProduct(product: ProductModel) {
    this.router.navigate(['/products/product', product.id]);
  }

}
