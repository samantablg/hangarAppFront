import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';
import { RouterFacade } from 'src/app/store/facade/router.facade';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent {

  id: number;
  product: ProductModel;

  constructor(private productFacade: ProductFacade, private routerFacade: RouterFacade) {
    this.id = this.routerFacade.id$;

    this.product = this.productFacade.selectProduct(this.id);
  }

  updateProduct(product: ProductModel) {
    this.productFacade.editProduct(product);
  }
}
