import { ProductsResultComponent } from './views/products-result/products-result.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsOfHangarComponent } from './views/products-of-hangar/products-of-hangar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    component: FormProductComponent
  },
  {
    path: 'hangar/:id',
    component: ProductsOfHangarComponent
  },
  {
    path: 'modify/:id',
    component: FormProductComponent
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
