import { ProductOfHangarService } from './../../core/services/product-of-hangar.service';
import { Router } from '@angular/router';
import * as productActions from '../actions/product.actions';
import { ProductsActionTypes } from '../actions/product.actions';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/core/services/product.service';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProductEffects {

  constructor(private productService: ProductService,
              private productOfHangarService: ProductOfHangarService,
              private actions$: Actions,
              private router: Router) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LOAD_PRODUCTS),
    switchMap(() => this.productService.loadProducts()
      .pipe(
        map(products => ({ type: '[PRODUCT] LOADED_PRODUCTS', payload: products }) ),
        catchError( error => of(new productActions.ProductsLoadFail(error)) )
      )
    )
  );

  @Effect()
  saveProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.NEW_PRODUCT),

    switchMap((action: productActions.NewProduct) => {
      return this.productService.postProduct(action.payload).pipe(
        map(response => ({
          type: '[PRODUCT] LOAD_PRODUCTS',
          })
        ),
        tap(() => this.router.navigate(['products'])),
        catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect()
  deleteProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.DELETE_PRODUCT),

    switchMap((action: productActions.DeleteProduct) => {
      return this.productService.deleteProduct(action.payload.id).pipe(
        map(response => ({
          type: '[PRODUCT] LOAD_PRODUCTS',
          })
        ),
        tap(() => this.router.navigate(['products'])),
        catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect({ dispatch: false})
  editProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.EDIT_PRODUCT),

    switchMap((action: productActions.EditProduct) => {
      return this.productService.updateProduct(action.payload).pipe(
        map( _ => ({
          type: '[PRODUCT] LOAD_PRODUCTS',
          })
        ),
        tap(() => this.router.navigate(['products'])),
        catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  // TODO: mostrar al usuario que el producto no puede ser borrado

  @Effect()
  isProductLinkToHangar$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.CHECK_PRODUCT_DELETED),

    switchMap((action: productActions.CheckIfProductCanBeDeleted) => {
      return this.productOfHangarService.isProductLinkToHangar(action.payload.id).pipe(
        map(response => {
          if (!response) {
            return ({
              type: '[PRODUCT] DELETE_PRODUCT',
              payload: action.payload
              });
            }
        })
      );
    })
  );

  @Effect()
  productsOfHangar$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.LOAD_PRODUCTS_OF_HANGAR),

    switchMap((action: productActions.LoadProductsOfHangar) => {
      return this.productOfHangarService.loadRelationshipsExtended(action.payload).pipe(
        map(response => ({
          type: '[PRODUCT] LOADED_PRODUCTS_OF_HANGAR', payload: response
          })
        ),
        catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect({ dispatch: false})
  deleteProductsOfHangar$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.DELETE_PRODUCT_OF_HANGAR),

    switchMap((action: productActions.DeleteProductOfHangar) => {
      return this.productOfHangarService.unlinkProductOfHangar(action.payload).pipe(
        map( _ => ({
          type: '[PRODUCT] LOAD_PRODUCTS_OF_HANGAR', payload: action.payload.hangar
          })
        ),
        tap(() => this.router.navigate(['products'])),
        catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect()
  saveProductOfHangar$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.SAVE_PRODUCT_HANGAR),

    switchMap((action: productActions.SaveProductHangar) => {
      return this.productOfHangarService.postProductToHangar(action.payload).pipe(
        map( _ => ({
          type: '[PRODUCT] LOAD_PRODUCTS_OF_HANGAR', payload: action.payload.hangar
        })
      ),
    catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect()
  editProductOfHangar$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.EDIT_PRODUCT_HANGAR),

    switchMap((action: productActions.EditProductOfHangar) => {
      return this.productOfHangarService.updateAmountOfRelationShip(action.payload).pipe(
        map( _ => ({
          type: '[PRODUCT] LOAD_PRODUCTS_OF_HANGAR', payload: action.payload.hangar
        })
      ),
    catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect()
  loadPrPricesOfProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.LOAD_PRICES_OF_PRODUCT),

    switchMap((action: productActions.PricesOfProductLoad) => {
      return this.productService.loadPricesOfProduct(action.payload).pipe(
        map( response => ({
          type: '[PRODUCT] LOADED_PRICES_OF_PRODUCT', payload: response
        })
      ),
    tap(() => this.router.navigate(['products/product', action.payload])),
    catchError(error => of(new productActions.ProductsLoadFail(error)))
      );
    })
  );

  @Effect()
  savePriceOfProduct$: Observable<any> = this.actions$.pipe(
    ofType(ProductsActionTypes.NEW_PRICE),

    switchMap((action: productActions.NewPriceOfProduct) => {
      return this.productService.postPrice(action.payload.price, action.payload.idProduct).pipe(
        map( _ => ({
          type: '[PRODUCT] LOAD_PRICES_OF_PRODUCT', payload: action.payload.idProduct
        })),
        tap(() => this.router.navigate(['products/product', action.payload.idProduct]))
      );
    })
  );
 /* this.productService.postPrice(this.formPrice.value.price, this.product.id).subscribe( data => {
                  console.log(data);
                });
 */
}
