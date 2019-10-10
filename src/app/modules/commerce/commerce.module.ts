import { CommerceRoutingModule } from './commerce-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceComponent } from './views/commerce/commerce.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [CommerceComponent, ProductsComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule
  ],
  exports: [CommerceComponent]
})
export class CommerceModule { }
