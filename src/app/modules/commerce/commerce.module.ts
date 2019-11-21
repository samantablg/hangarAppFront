import { ProductsModule } from './../products/products.module';
import { CommerceRoutingModule } from './commerce-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceComponent } from './views/commerce/commerce.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { ProductCardOrderComponent } from './components/product-card-order/product-card-order.component';
import { RouterModule } from '@angular/router';
import { ProductsOrderComponent } from './components/products-order/products-order.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CommerceComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    ProductCardOrderComponent,
    ProductsOrderComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    TranslateModule,
    RouterModule,
    SharedModule,
    ProductsModule
  ],
  exports: [CommerceComponent]
})
export class CommerceModule { }
