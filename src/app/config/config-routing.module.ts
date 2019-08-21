import { AuthGuardService } from '../core/services/config/auth-guard.service';
import { LoginComponent } from './views/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigRoutingModule {}
