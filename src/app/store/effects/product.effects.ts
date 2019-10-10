import * as product from '../actions/index';
import { ProductsActionTypes } from '../actions/products.actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/core/services/product.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

  constructor(private productService: ProductService, private actions$: Actions) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LOAD_PRODUCTS),
    switchMap(() => this.productService.loadProducts()
      .pipe(
        map(products => ({ type: '[PRODUCT] LOADED_PRODUCTS', payload: products }) ),
        catchError( error => of(new product.ProductsLoadFail(error)) )
      )
    )
  );

}
