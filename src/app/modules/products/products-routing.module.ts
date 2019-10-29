import { ProductsResultComponent } from './views/products-result/products-result.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsOfHangarComponent } from './views/products-of-hangar/products-of-hangar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { ProductModifyComponent } from './views/product-modify/product-modify.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'new',
    component: ProductNewComponent
  },
  {
    path: 'hangar/:id',
    component: ProductsOfHangarComponent
  },
  {
    path: 'modify/:id',
    component: ProductModifyComponent
  },
  {
    path: 'search/:name',
    component: ProductsResultComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
