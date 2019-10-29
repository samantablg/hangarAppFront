import { Observable } from 'rxjs';
import { ProductOfOrderModel } from './../../core/models/product-of-order.interface';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State } from '../state';
import { OrderModel } from 'src/app/core/models/order.interface';
import { selectTotalPrice, selectOrder, selectTotalProducts, selectProductsOfOrder } from '../selectors/commerce.selectors';
@Injectable({
  providedIn: 'root'
})
export class CommerceFacade {

  order$: Observable<OrderModel> = this.store.pipe(select(selectOrder));
  totalPrice$: Observable<number> = this.store.pipe(select(selectTotalPrice));
  totalProducts$: Observable<number> = this.store.pipe(select(selectTotalProducts));
  productsOfOrder$: Observable<ProductOfOrderModel[]> = this.store.pipe(select(selectProductsOfOrder));

  constructor(private store: Store<State>) {}

  addProductToOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] ADD_PRODUCT_ORDER', payload: productOrder });
  }

  removeProductOfOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] REMOVE_PRODUCT_ORDER', payload: productOrder });
  }

  increaseProductOfOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] INCREASE_PRODUCT_ORDER', payload: productOrder });
  }

  decreaseProductOfOrder(productOrder: ProductOfOrderModel) {
    this.store.dispatch({ type: '[COMMERCE] DECREASE_PRODUCT_ORDER', payload: productOrder });
  }

  sendOrder(order: OrderModel) {
    this.store.dispatch({ type: '[COMMERCE] SEND_ORDER', payload: order });
  }

}
