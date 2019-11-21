import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { ResultSearchComponent } from './views/result-search/result-search.component';
import { ListComponent } from './components/list/list.component';
import { InputFormComponent } from './components/input-form/input-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SearchComponent,
    AboutComponent,
    ButtonComponent,
    CardProductComponent,
    ResultSearchComponent,
    ListComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    CardProductComponent,
    SearchComponent,
    ResultSearchComponent,
    InputFormComponent
  ]
})
export class SharedModule { }
