import { selectProductList, selectLoading, selectError,
         selectProductsOfHangar, selectPricesOfProduct, selectIsProduct,
         selectProductById, selectProductsUnlinkOfHangar, selectProductsToShop, selectProductsLike } from './../selectors/product.selectors';
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

  products$: Observable<ProductModel[]> = this.store.pipe(select(selectProductList));
  loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  error$: Observable<any> = this.store.pipe(select(selectError));
  productsOfHangar$: Observable<ProductOfHangarModel[]> = this.store.pipe(select(selectProductsOfHangar));
  prices$: Observable<PriceModel[]> = this.store.pipe(select(selectPricesOfProduct));
  isProduct$: Observable<boolean> = this.store.pipe(select(selectIsProduct));
  product$: Observable<ProductModel> = this.store.pipe(select(selectProductById));
  productsUnlinkHangar$: Observable<ProductModel[]> = this.store.pipe(select(selectProductsUnlinkOfHangar));
  productsToShop$: Observable<ProductModel[]> = this.store.pipe(select(selectProductsToShop));
  productsResult$ = this.store.pipe(select(selectProductsLike));

  constructor(private store: Store<State>) { }

  loadProducts() {
    this.store.dispatch({ type: '[PRODUCT] LOAD_PRODUCTS' });
  }

  deleteProduct(product: ProductModel) {
    this.store.dispatch({ type: '[PRODUCT] CHECK_PRODUCT_DELETED', payload: product });
  }

  newProduct(product: ProductModel) {
    this.store.dispatch({ type: '[PRODUCT] NEW_PRODUCT', payload: product});
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

  isProductsLoaded() {
    this.store.dispatch({ type: '[PRODUCT] IS_LOADED' });
  }

}
