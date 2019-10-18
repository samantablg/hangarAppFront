import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.css']
})
export class NavProductComponent {

  @Input() hangars?: HangarModel[];
  @Output() insertProduct = new EventEmitter();
  @Output() getHangars = new EventEmitter();
  @Output() viewProductsOfHangar = new EventEmitter<HangarModel>();

  constructor() {}
}

