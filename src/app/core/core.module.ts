import { CommerceService } from './services/commerce.service';
import { ProductService } from './services/product.service';
import { ProductOfHangarService } from 'src/app/core/services/product-of-hangar.service';
import { HangarService } from './services/hangar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [
    CommerceService,
    HangarService,
    ProductOfHangarService,
    ProductService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
