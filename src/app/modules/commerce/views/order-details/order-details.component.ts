import { ProfileFacade } from './../../../../store/facade/profile.facade';
import { CommerceFacade } from './../../../../store/facade/commerce.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/core/models/order.interface';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { RouterFacade } from 'src/app/store/facade/router.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  fullname$: Observable<string>;
  totalPrice$: Observable<number>;
  totalProducts$: Observable<number>;
  order$: Observable<OrderModel>;
  productsOfOrder$: Observable<ProductOfOrderModel[]>;
  productOrder: ProductOfOrderModel = {
    hangar_id: 0,
    product_id: 0,
    quantity: 0,
    price: 0
  };

  constructor(private commerceFacade: CommerceFacade,
              private profileFacade: ProfileFacade,
              private router: Router) { }

  ngOnInit() {
    this.fullname$ = this.profileFacade.fullname$;
    this.totalPrice$ = this.commerceFacade.totalPrice$;
    this.totalProducts$  = this.commerceFacade.totalProducts$;
    this.order$ = this.commerceFacade.order$;
    this.productsOfOrder$ = this.commerceFacade.productsOfOrder$;
  }

  sendOrder(order: OrderModel) {
    this.commerceFacade.sendOrder(order);
  }

  getProduct(id: number) {
    this.router.navigate(['products/product', id]);
  }

  removeProductToShoppingCart(productOfOrder: ProductOfOrderModel) {
    this.commerceFacade.removeProductOfOrder(productOfOrder);
  }

  increaseProductOfShoppingCart(productOfOrder: ProductOfOrderModel) {
    this.commerceFacade.increaseProductOfOrder(productOfOrder);
  }

  decreaseProductOfShoppingCart(productOfOrder: ProductOfOrderModel) {
    this.commerceFacade.decreaseProductOfOrder(productOfOrder);
  }

  moreShopping() {
    this.router.navigate(['/commerce']);
  }
}
