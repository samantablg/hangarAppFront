import { EffectsModule } from '@ngrx/effects';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
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

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducers } from './store/reducers';
import { environment } from 'src/environments/environment.prod';
import { HangarsEffects } from './store/effects/hangar.effects';
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
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 55 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([HangarsEffects]),
    CoreModule,
    TranslateModule,
    FormsModule,
    ConfigModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
