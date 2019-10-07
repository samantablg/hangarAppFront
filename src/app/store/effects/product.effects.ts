import * as product from './../actions/product.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/core/services/product.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

  constructor(private productService: ProductService, private actions$: Actions ) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(product.LOAD_PRODUCTS),
    switchMap(() => this.productService.loadProducts()
      .pipe(
        map(products => ({ type: '[PRODUCT] LOADED_PRODUCTS', payload: products })
        )
      )
    )
  );

  @Effect()
  loadProductsPage$ = this.actions$.pipe(
    ofType(product.LOAD_PRODUCTS),
    switchMap(() => this.productService.loadProductsPage(0, 5)
    .pipe(
      map(products => ({ type: '[PRODUCT] LOADED_PRODUCTS', payload: products}))
      )
    )
  );

}
