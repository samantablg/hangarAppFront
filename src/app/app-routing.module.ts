import { AuthGuardService } from './core/services/config/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/views/home/home.component';
import { AboutComponent } from './shared/views/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'login',
  loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
  },
  { path: 'hangars',
  loadChildren: () => import('./modules/hangars/hangars.module').then(m => m.HangarsModule), canActivate: [AuthGuardService]
  },
  { path: 'products',
  loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuardService]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
