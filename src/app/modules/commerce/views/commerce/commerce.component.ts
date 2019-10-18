import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state';
import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { OrderModel } from 'src/app/core/models/order.interface';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit, OnChanges {

  products: ProductModel[] = [];
  productOrder: ProductOfOrderModel = {
    hangar_id: 0,
    product_id: 0,
    quantity: 0,
    price: 0
  };
  loading: boolean;
  error: any;
  totalProducts: number;
  totalPrice: number;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.store.select('product')
    .subscribe( data => {
      this.products = data.products;
      this.loading = data.loading;
      this.error = data.error;
    });
  }

  ngOnChanges() {
    this.store.select('commerce')
    .subscribe( data => {
      console.log(data);
    });
  }

  addProductToShoppingCart(product: ProductModel) {
    this.productOrder.hangar_id = product.hangars[0];
    this.productOrder.product_id = product.id;
    this.productOrder.price = product.price;
    this.productOrder.quantity = 1;
    this.store.dispatch({ type: '[COMMERCE] ADD_PRODUCT', payload: this.productOrder });
  }

  removeProductToShoppingCart(product: ProductModel) {
    this.productOrder.hangar_id = product.hangars[0];
    this.productOrder.product_id = product.id;
    this.productOrder.price = product.price;
    this.productOrder.quantity = 1;
    this.store.dispatch({ type: '[COMMERCE] REMOVE_PRODUCT', payload: this.productOrder });
  }

}
