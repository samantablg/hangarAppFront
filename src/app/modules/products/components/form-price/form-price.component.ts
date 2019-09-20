import { ProductService } from './../../../../core/services/product.service';
import { PriceModel } from '../../../../core/models/price.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'app-form-price',
  templateUrl: './form-price.component.html',
  styleUrls: ['./form-price.component.css']
})
export class FormPriceComponent {

  @Input() product: ProductModel;
  public formPrice: FormGroup;
  priceToProduct: PriceModel;

  @Input() insertPrice: boolean;

  constructor(private productService: ProductService ) {
    this.formPrice = new FormGroup({
      price: new FormControl('')
    });
  }

  savePrice() {
    this.productService.postPrice(this.formPrice.value.price, this.product.id).subscribe( data => {
                  console.log(data);
                });
    this.insertPrice = !this.insertPrice;
  }

}
