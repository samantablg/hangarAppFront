import { PriceModel } from 'src/app/core/models/price.interface';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/core/models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  product: ProductModel;
  productsUnlinkHangar: any;
  productsOfHangar$: Observable<ProductOfHangarModel[]>;
  prices$: Observable<PriceModel[]>;
  isProduct$: boolean;

  constructor(private store: Store<State>) {

    this.products$ = this.store.pipe(select('product', 'products'));
    this.loading$ = this.store.pipe(select('product', 'loading'));
    this.error$ = this.store.pipe(select('product', 'error'));
    this.productsOfHangar$ = this.store.pipe(select('product', 'productsOfHangar'));
    this.prices$ = this.store.pipe(select('product', 'prices'));

    this.store.select('product', 'isProduct')
    .subscribe(response => {
      this.isProduct$ = response;
    });
  }

  loadProducts() {
    this.store.dispatch({ type: '[PRODUCT] LOAD_PRODUCTS' });
  }

  deleteProduct(product: ProductModel) {
    this.store.dispatch({ type: '[PRODUCT] CHECK_PRODUCT_DELETED', payload: product });
  }

  newProduct(product: ProductModel) {
    this.store.dispatch({ type: '[PRODUCT] NEW_PRODUCT', payload: product});
  }

  selectProduct(id: number): ProductModel {
    this.store.select('product', 'products')
    .subscribe( response => {
      this.product = response.find( prod => prod.id === id);
    });

    return this.product;
  }

  selectProductsUnlinkHangar(idHangar: number): ProductModel[] {
    this.store.select('product', 'products')
    .subscribe( products => {
      this.productsUnlinkHangar = products.filter( (product) => {
        return !product.hangars.includes(idHangar);
      });
    });
    return this.productsUnlinkHangar;
  }

  editProduct(product: ProductModel) {
    this.store.dispatch({type: '[PRODUCT] EDIT_PRODUCT', payload: product});
  }

  loadProductsOfHangar(idHangar: number) {
    this.store.dispatch({type: '[PRODUCT] LOAD_PRODUCTS_OF_HANGAR', payload: idHangar});
  }

  deleteProductOfHangar(productOfHangar: ProductOfHangarModel) {
    this.store.dispatch({type: '[PRODUCT] DELETE_PRODUCT_OF_HANGAR', payload: productOfHangar});
  }

  saveProductOfHangar(productOfHangar: ProductOfHangarModel) {
    this.store.dispatch({type: '[PRODUCT] SAVE_PRODUCT_HANGAR', payload: productOfHangar});
  }

  editProductOfHangar(productOfHangar: ProductOfHangarModel) {
    this.store.dispatch({type: '[PRODUCT] EDIT_PRODUCT_HANGAR', payload: productOfHangar});
  }

  loadPricesOfProduct(id: number) {
    this.store.dispatch({type: '[PRODUCT] LOAD_PRICES_OF_PRODUCT', payload: id});
  }

  savePrice(price: PriceModel) {
    this.store.dispatch({type: '[PRODUCT] NEW_PRICE', payload: price});
  }

  isProduct(name: string) {
    this.store.dispatch({ type: '[PRODUCT] VALIDATE_PRODUCT', payload: name });
  }
}
