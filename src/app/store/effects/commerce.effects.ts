import { Injectable } from '@angular/core';
import { CommerceActionTypes } from './../actions/commerce.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import * as commerceActions from '../actions/commerce.actions';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CommerceEffects {

  constructor(private productService: ProductService,
              private actions$: Actions,
              private router: Router) {}

  @Effect()
  saveOrder$: Observable<any> = this.actions$.pipe(
    ofType(CommerceActionTypes.SEND_ORDER),

    switchMap((action: commerceActions.SendOrderCommerce ) =>
      this.productService.saveOrder(action.payload).pipe(
        map(response => console.log(response)),
        tap(() => this.router.navigate([''])),
        catchError((error) => of(new commerceActions.CommerceFail(error)))
      )
    )
  );
}
