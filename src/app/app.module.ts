import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { HangarsModule } from './modules/hangars/hangars.module';
import { ProductsModule } from './modules/products/products.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/views/home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponent } from './shared/components/search/search.component';
import { AboutComponent } from './shared/views/about/about.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    HangarsModule,
    ProductsModule,
    ReactiveFormsModule,
    CoreModule,
    TranslateModule,
    FormsModule,
    ConfigModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
