import { CommerceRoutingModule } from './commerce-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceComponent } from './views/commerce/commerce.component';
import { ProductsComponent } from './components/products-shop/products-shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { ProductCardCommerceComponent } from './components/product-card-commerce/product-card-commerce.component';
import { RouterModule } from '@angular/router';
import { ProductsOrderComponent } from './components/products-order/products-order.component';

@NgModule({
  declarations: [
    CommerceComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    ProductCardCommerceComponent,
    ProductsOrderComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    TranslateModule,
    RouterModule
  ],
  exports: [CommerceComponent]
})
export class CommerceModule { }
