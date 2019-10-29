import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-form-product-hangar',
  templateUrl: './form-product-hangar.component.html',
  styleUrls: ['./form-product-hangar.component.css']
})
export class FormProductHangarComponent implements OnInit {

  constructor() { }

  get product() {
    return this.formProductOfHangar.get('product');
  }

  get amount() {
    return this.formProductOfHangar.get('amount');
  }

  get hangar() {
    return this.formProductOfHangar.get('hangar');
  }

  @Input() isAmountModify: boolean;
  @Input() idHangar: number;
  @Input() idProduct?: number;
  @Input() products?: ProductModel[];
  @Output() saveProductOfHangar = new EventEmitter<ProductOfHangarModel>();
  @Output() editProductOfHangar = new EventEmitter<ProductOfHangarModel>();
  productToHangar: ProductOfHangarModel;

  formProductOfHangar = new FormGroup({
    hangar: new FormControl(''),
    product: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit() {
    this.hangar.setValue(this.idHangar);
    this.amount.setValue(this.amount);
  }

  addProduct(): void { // TODO: averiguar porque sucede esto
    this.product.setValue(parseInt(this.formProductOfHangar.value.product, 10));
    console.log(this.formProductOfHangar.value);
    if (this.isAmountModify) {
      this.product.setValue(this.idProduct);
      this.editProductOfHangar.emit(this.formProductOfHangar.value);
    } else {
      this.saveProductOfHangar.emit(this.formProductOfHangar.value);
    }
  }

}
