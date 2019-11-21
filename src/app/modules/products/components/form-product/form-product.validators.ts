import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductFacade } from 'src/app/store/facade/product.facade';

export class ProductAsyncValidators {
  static shouldBeUnique(productFacade: ProductFacade) {
    return (control: AbstractControl): Promise<ValidationErrors> => new Promise(
      (resolve, reject) => {
        productFacade.isProduct(control.value as string);
        setTimeout( () => {
          productFacade.isProduct$.subscribe(response => {
            resolve({shouldBeUnique: response});
          });
        }, 3000);
    });
  }
}
