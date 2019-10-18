import { ProductFacade } from 'src/app/store/facade/product.facade';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {

  constructor(private productFacade: ProductFacade) { }

  postProduct(product: ProductModel) {
    this.productFacade.newProduct(product);
  }

}
