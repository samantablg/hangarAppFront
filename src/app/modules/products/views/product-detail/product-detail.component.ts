import { Observable } from 'rxjs';
import { PriceModel } from 'src/app/core/models/price.interface';
import { ProductFacade } from './../../../../store/facade/product.facade';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterFacade } from 'src/app/store/facade/router.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {

  product: ProductModel;
  insertPrice = false;
  showHistoric = false;
  prices$: Observable<PriceModel[]>;
  id: number;
  priceOfProduct: PriceModel;

  constructor(private router: Router,
              private routerFacade: RouterFacade,
              private productFacade: ProductFacade) {
      this.id = this.routerFacade.id$;

      this.product = this.productFacade.selectProduct(this.id);
      this.productFacade.loadPricesOfProduct(this.id);
  }

  public addPrice(): void {
    this.insertPrice = !this.insertPrice;
  }

  public getPrices(): void {
    this.showHistoric = !this.showHistoric;
    this.prices$ = this.productFacade.prices$;
  }

  public editProduct(): void {
    this.router.navigate(['/products/modify', this.product.id]);
  }

  public deleteProduct(): void {
    this.productFacade.deleteProduct(this.product);
  }

  public savePrice(priceOfProduct: number): void {
    this.priceOfProduct = { price: priceOfProduct, idProduct: this.id };
    this.productFacade.savePrice(this.priceOfProduct);
    this.insertPrice = !this.insertPrice;
  }

}
