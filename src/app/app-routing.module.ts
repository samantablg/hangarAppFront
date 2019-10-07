import { LogoutComponent } from './config/components/logout/logout.component';
import { RegisterComponent } from './config/views/register/register.component';
import { LoginComponent } from './config/views/login/login.component';
import { AuthGuardService } from './config/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/views/home/home.component';
import { AboutComponent } from './shared/views/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'hangars', loadChildren: './modules/hangars/hangars.module#HangarsModule', canActivate: [AuthGuardService] },
  { path: 'products', loadChildren: './modules/products/products.module#ProductsModule', canActivate: [AuthGuardService] },
  { path: 'commerce', loadChildren: './modules/commerce/commerce.module#CommerceModule', canActivate: [AuthGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
