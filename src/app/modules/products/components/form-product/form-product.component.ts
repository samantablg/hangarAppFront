import { ProductModel } from '../../../../core/models/product.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductAsyncValidators } from './form-product.validators';
import { ProductFacade } from 'src/app/store/facade/product.facade';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Output() updateProduct = new EventEmitter<ProductModel>();
  @Output() postProduct = new EventEmitter<ProductModel>();
  @Input() isEdit: boolean;
  @Input() product?: ProductModel;
  productForm: ProductModel;

  formProduct = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ],
    [ProductAsyncValidators.shouldBeUnique(this.productFacade)]),
    description: new FormControl('', [
      Validators.required
    ]),
    id: new FormControl(''),
    state: new FormControl(true)
  });

  constructor(private productFacade: ProductFacade) { }

  ngOnInit() {
    if (this.isEdit) {
      this.name.setValue(this.product.name);
      this.description.setValue(this.product.description);
    }
  }

  get name() {
    return this.formProduct.get('name');
  }

  get description() {
    return this.formProduct.get('description');
  }

  get id() {
    return this.formProduct.get('id');
  }

  saveProduct() {
    this.productForm = this.formProduct.value;
    if (this.isEdit) {
      this.updateProduct.emit(this.productForm);
    } else {
      this.postProduct.emit(this.productForm);
    }
  }

}
