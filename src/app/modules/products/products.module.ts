import { TranslateModule } from '@ngx-translate/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './views/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { FormPriceComponent } from './components/form-price/form-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsOfHangarComponent } from './views/products-of-hangar/products-of-hangar.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { AddProductsHangarComponent } from './components/add-products-hangar/add-products-hangar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductsResultComponent } from './views/products-result/products-result.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PriceListComponent } from './components/price-list/price-list.component';
@NgModule({
  declarations: [
    ProductsComponent, ProductDetailComponent, FormPriceComponent,
    PriceListComponent, FormProductComponent, ProductsOfHangarComponent, ProductNewComponent,
    AddProductsHangarComponent, ProductsResultComponent, ProductListComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule, ReactiveFormsModule, TranslateModule, InfiniteScrollModule
  ],
  exports: [ProductsComponent, ProductsOfHangarComponent]
})

export class ProductsModule {

}
