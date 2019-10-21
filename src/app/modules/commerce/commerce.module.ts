import { CommerceRoutingModule } from './commerce-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceComponent } from './views/commerce/commerce.component';
import { ProductsComponent } from './components/products-shop/products-shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [CommerceComponent, ProductsComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule
  ],
  exports: [CommerceComponent]
})
export class CommerceModule { }
