import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';
import { HangarFacade } from 'src/app/store/facade/hangar.facade';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<ProductModel[]> = this.productFacade.products$;
  loading$: Observable<boolean> = this.productFacade.loading$;
  error$: Observable<any> = this.productFacade.error$;
  hangars$: Observable<HangarModel[]>;

  constructor(private router: Router,
              private productFacade: ProductFacade,
              private hangarFacade: HangarFacade) {}

  ngOnInit() {
    this.productFacade.isProductsLoaded();
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

  hangarsNotLoaded() {
    this.hangarFacade.isHangarsLoaded();
  }

}
