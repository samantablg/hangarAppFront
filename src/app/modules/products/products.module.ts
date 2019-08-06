import { TranslateModule } from '@ngx-translate/core';
import { ListPriceComponent } from './components/list-price/list-price.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './views/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { FormPriceComponent } from './components/form-price/form-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsOfHangarComponent } from './components/products-of-hangar/products-of-hangar.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { ProductModifyComponent } from './views/product-modify/product-modify.component';
import { AddProductsHangarComponent } from './components/add-products-hangar/add-products-hangar.component';

@NgModule({
  declarations: [
    ProductsComponent, ProductDetailComponent, FormPriceComponent,
    ListPriceComponent, FormProductComponent, ProductsOfHangarComponent, ProductNewComponent,
    ProductModifyComponent, AddProductsHangarComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule, ReactiveFormsModule, TranslateModule
  ],
  exports: [ProductsComponent, ProductsOfHangarComponent]
})

export class ProductsModule { }
