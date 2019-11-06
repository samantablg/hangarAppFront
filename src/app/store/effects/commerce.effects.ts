import { selectProductsOfOrder } from './../selectors/commerce.selectors';
import { State } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { CommerceService } from './../../core/services/commerce.service';
import { Injectable } from '@angular/core';
import { CommerceActionTypes } from './../actions/commerce.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import * as commerceActions from '../actions/commerce.actions';
import { AddedProductOfOrder,
         CommerceFail,
         IncreasedProductOfOrder,
         DiminishedProductOfOrder,
         NoChangeOrder } from '../actions/commerce.actions';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';

@Injectable()
export class CommerceEffects {

  constructor(private commerceService: CommerceService,
              private actions$: Actions,
              private router: Router,
              private store: Store<State>) {}

  @Effect()
  saveOrder$: Observable<NoChangeOrder | CommerceFail> = this.actions$.pipe(
    ofType(CommerceActionTypes.SEND_ORDER),
    switchMap( (action: commerceActions.SendOrderCommerce) =>
      this.commerceService.saveOrder(action.payload).pipe(
        map( _ => new NoChangeOrder()), // averiguar como hacer para no tener que ejecutar esta accion
        tap(() => this.router.navigate([''])),
        catchError((error) => of(new CommerceFail(error)))
      )
    )
  );

  @Effect()
  addProduct$: Observable<AddedProductOfOrder | NoChangeOrder> = this.actions$.pipe(
    ofType(CommerceActionTypes.ADD_PRODUCT_ORDER),
    withLatestFrom(this.store.select(selectProductsOfOrder)),
    map(([action, productsOfOrder]: [commerceActions.AddProductOfOrder, ProductOfOrderModel[]]) => {
      if (productsOfOrder.find(product =>
        product.product_id === action.payload.product_id && product.hangar_id === action.payload.hangar_id) === undefined) {
        return new AddedProductOfOrder(action.payload);
      } else {
        return new NoChangeOrder();
      }
    })
  );

  @Effect()
  increaseProduct$: Observable<IncreasedProductOfOrder | NoChangeOrder> = this.actions$.pipe(
    ofType(CommerceActionTypes.INCREASE_PRODUCT_ORDER),
    withLatestFrom(this.store.select(selectProductsOfOrder)),
    map(([action, productsOfOrder]: [commerceActions.IncreaseProductOfOrder, ProductOfOrderModel[]]) => {
      if (productsOfOrder.find(product =>
        product.product_id === action.payload.product_id && product.hangar_id === action.payload.hangar_id) !== undefined) {
        return new IncreasedProductOfOrder(action.payload);
      } else {
        return new NoChangeOrder();
      }
    })
  );

  @Effect()
  decreaseProductOfOrder$: Observable<DiminishedProductOfOrder | NoChangeOrder> = this.actions$.pipe(
    ofType(CommerceActionTypes.DECREASE_PRODUCT_ORDER),
    withLatestFrom(this.store.select(selectProductsOfOrder)),
    map( ([action, productsOfOrder]: [commerceActions.DecreaseProductOfOrder, ProductOfOrderModel[]]) => {
      if (productsOfOrder.find(product =>
        product.product_id === action.payload.product_id && product.hangar_id === action.payload.hangar_id) !== undefined
        && action.payload.quantity > 1) {
          return new DiminishedProductOfOrder(action.payload);
        } else {
          return new NoChangeOrder();
        }
    })
  );

}
