import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-product',
  templateUrl: './side-product.component.html',
  styleUrls: ['./side-product.component.css']
})
export class SideProductComponent implements OnInit {

  @Input() hangars: HangarModel[];
  @Output() insertProduct = new EventEmitter();
  @Output() getHangars = new EventEmitter();
  @Output() viewProductsOfHangar = new EventEmitter<HangarModel>();
  @Output() hangarsNotLoaded = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.hangars === null) {
      this.hangarsNotLoaded.emit();
    }
  }
}

