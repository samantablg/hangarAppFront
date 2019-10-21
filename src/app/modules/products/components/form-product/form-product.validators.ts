import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductFacade } from 'src/app/store/facade/product.facade';

export class ProductAsyncValidators {
  static shouldBeUnique(productFacade: ProductFacade) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        productFacade.isProduct(control.value as string);
        setTimeout(() => {
          if (productFacade.isProduct$) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        }, 1000);
    });
  }
}
