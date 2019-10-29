import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
})
export class ConfigModule { }
