import { ProductModel } from 'src/app/core/models/product.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-price',
  templateUrl: './form-price.component.html',
  styleUrls: ['./form-price.component.css']
})
export class FormPriceComponent {

  @Input() product: ProductModel;
  @Input() insertPrice: boolean;
  @Output() sendPrice = new EventEmitter<number>();

  formPrice = new FormGroup({
    price: new FormControl('')
  });

  constructor() { }

  savePrice() {
    this.sendPrice.emit(this.formPrice.value.price);
  }

}
