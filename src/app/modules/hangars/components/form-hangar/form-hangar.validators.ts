import { HangarFacade } from './../../../../store/facade/hangar.facade';
import { AbstractControl, ValidationErrors } from '@angular/forms';
export class HangarAsyncValidators {
  static shouldBeUnique(hangarFacade: HangarFacade) {
    return (control: AbstractControl): Promise<ValidationErrors> => new Promise(
      (resolve) => {
        hangarFacade.isHangar(control.value as string);
        setTimeout( () => {
          hangarFacade.isHangar$.subscribe(response => {
            console.log(response);
            resolve({shouldBeUnique: response});
          });
        }, 1000);
      });
  }
}
