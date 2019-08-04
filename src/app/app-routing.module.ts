import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hangars',
  loadChildren: () => import('./modules/hangars/hangars.module').then(m => m.HangarsModule)
  },
  { path: 'products',
  loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
