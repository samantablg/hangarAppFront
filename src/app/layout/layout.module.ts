import { SharedModule } from './../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavbarComponent } from './shell/components/navbar/navbar.component';
import { MainComponent } from './shell/components/main/main.component';
import { FooterComponent } from './shell/components/footer/footer.component';
import { NavbarViewComponent } from './shell/containers/navbar-container/navbar-container.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ShellComponent, NavbarComponent, MainComponent, FooterComponent, NavbarViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularSvgIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [ShellComponent, NavbarComponent],
})
export class LayoutModule { }
