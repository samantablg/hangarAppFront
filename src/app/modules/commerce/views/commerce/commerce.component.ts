import { Observable } from 'rxjs';
import { CommerceFacade } from './../../../../store/facade/commerce.facade';
import { Component, OnInit, } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductOfOrderModel } from 'src/app/core/models/product-of-order.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';
import { OrderModel } from 'src/app/core/models/order.interface';
import { RouterFacade } from 'src/app/store/facade/router.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  totalPrice$: Observable<number>;
  totalProducts$: Observable<number>;
  order$: Observable<OrderModel>;
  url$: Observable<string>;

  productOrder: ProductOfOrderModel = {
    hangar_id: 0,
    product_id: 0,
    quantity: 0,
    price: 0
  };

  constructor(private commerceFacade: CommerceFacade,
              private productFacade: ProductFacade,
              private routerFacade: RouterFacade,
              private router: Router) { }

  ngOnInit() {

    this.products$ = this.productFacade.productsToShop$;
    this.totalPrice$ = this.commerceFacade.totalPrice$;
    this.totalProducts$  = this.commerceFacade.totalProducts$;
    this.order$ = this.commerceFacade.order$;
    this.url$ = this.routerFacade.url$;
   }

  addProductToShoppingCart(product: ProductModel) {
    this.productOrder.hangar_id = product.hangars[0];
    this.productOrder.product_id = product.id;
    this.productOrder.price = product.price;
    this.productOrder.quantity = 1;
    this.commerceFacade.addProductToOrder(this.productOrder);
  }

  sendOrder(order: OrderModel) {
    this.commerceFacade.sendOrder(order);
  }

  productsNotLoaded() {
    this.productFacade.loadProducts();
  }

  getProduct(id: number) {
    this.router.navigate(['products/product', id]);
  }

}
