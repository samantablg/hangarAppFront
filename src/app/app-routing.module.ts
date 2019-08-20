import { AuthGuardService } from './core/services/auth-guard.service';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/views/home/home.component';
import { AboutComponent } from './shared/views/about/about.component';
import { LoginComponent } from './shared/views/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
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
