import { HangarFacade } from './../../../../store/facade/hangar.facade';
import { AbstractControl, ValidationErrors } from '@angular/forms';
export class HangarAsyncValidators {
  static shouldBeUnique(hangarFacade: HangarFacade) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        hangarFacade.isHangar(control.value as string);
        setTimeout(() => {
          if (hangarFacade.isHangar$) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        }, 1000);
    });
  }
}
