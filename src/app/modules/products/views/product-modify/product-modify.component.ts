import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { ProductFacade } from 'src/app/store/facade/product.facade';
import { RouterFacade } from 'src/app/store/facade/router.facade';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  product$: Observable<ProductModel> = this.productFacade.product$;

  constructor(private productFacade: ProductFacade, private routerFacade: RouterFacade) { }

  ngOnInit() { }

  updateProduct(product: ProductModel) {
    this.productFacade.editProduct(product);
  }
}
