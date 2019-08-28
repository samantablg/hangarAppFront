import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

export class ProductAsyncValidators {
  static shouldBeUnique(productService: ProductService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        productService.productExistByName(control.value as string)
        .subscribe(response => {
          console.log(response);
          if (!response) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        }, (err) => {
          resolve({shouldBeUnique: true});
        });
    });
  }
}
