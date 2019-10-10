import { Injectable } from '@angular/core';
import { CommerceActionTypes } from './../actions/commerce.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { commerceReducer } from '../reducers/commerce.reducer';
import * as commerce from '../actions/commerce.actions';

@Injectable()
export class CommerceEffects {

  constructor(private productService: ProductService, private actions$: Actions) {}

  /* @Effect()
  loadProductsOfCommerce$ = this.actions$.pipe(
    ofType(CommerceActionTypes.LOAD_PRODUCTS_COMMERCE),
    switchMap(() => this.productService.loadProductsExtended()
      .pipe(
        map (products => ({ type: '[COMMERCE] LOADED_PRODUCTS_COMMERCE', payload: products }) ),
        catchError( error => of(new commerce.ProductsCommerceLoadFail(error)) )
      )
    )
  ); */

/* @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(CommerceActionTypes.ADD_PRODUCT),
    switchMap((action: commerce.AddProductCommerce) => {
      console.log(action.payload);
    })
  ); */
}
