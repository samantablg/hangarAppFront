import { PriceService } from '../../../../core/services/price.service';
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

  constructor(private priceService: PriceService ) {
    this.formPrice = new FormGroup({
      price: new FormControl('')
    });
  }

  savePrice() {
    this.priceService.postPrice(this.formPrice.value.price, this.product.id);
    this.insertPrice = !this.insertPrice;
  }

}
