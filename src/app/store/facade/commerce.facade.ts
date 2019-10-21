import { Observable } from 'rxjs';
import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State } from '../state';
import { OrderModel } from 'src/app/core/models/order.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class CommerceFacade {

  totalPrice$: Observable<number>;
  totalProducts$: Observable<number>;
  order$: Observable<OrderModel>;

  constructor(private store: Store<State>) {
    this.totalPrice$ = this.store.pipe(select('commerce', 'order', 'totalPrice'));
    this.totalProducts$ = this.store.pipe(select('commerce', 'order', 'totalProducts'));
    this.order$ = this.store.pipe(select('commerce', 'order'));
  }

  addProductToOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] ADD_PRODUCT_ORDER', payload: productOrder });
  }

  removeProductOfOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] REMOVE_PRODUCT_ORDER', payload: productOrder });
  }

  sendOrder(order: OrderModel) {
    this.store.dispatch({ type: '[COMMERCE] SEND_ORDER', payload: order });
  }

}
