import { Observable } from 'rxjs';
import { PriceModel } from 'src/app/core/models/price.interface';
import { ProductFacade } from './../../../../store/facade/product.facade';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterFacade } from 'src/app/store/facade/router.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  prices$: Observable<PriceModel[]> = this.productFacade.prices$;
  product$: Observable<ProductModel> = this.productFacade.product$;
  insertPrice = false;
  showHistoric = false;
  id: number;
  priceOfProduct: PriceModel;

  constructor(private router: Router,
              private routerFacade: RouterFacade,
              private productFacade: ProductFacade) {}

  ngOnInit() {
    this.routerFacade.id$
    .subscribe(resp => {
      this.id = resp;
    });
    this.productFacade.loadPricesOfProduct(this.id);
  }

  public addPrice(): void {
    this.insertPrice = !this.insertPrice;
  }

  public getPrices(): void {
    this.showHistoric = !this.showHistoric;
    this.prices$ = this.productFacade.prices$;
  }

  public editProduct(product: ProductModel): void {
    this.router.navigate(['/products/modify', product.id]);
  }

  public deleteProduct(product: ProductModel): void {
    this.productFacade.deleteProduct(product);
  }

  public savePrice(priceOfProduct: number): void {
    this.priceOfProduct = { price: priceOfProduct, idProduct: this.id };
    this.productFacade.savePrice(this.priceOfProduct);
    this.insertPrice = !this.insertPrice;
  }

}
