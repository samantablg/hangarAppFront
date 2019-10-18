import { UserFacade } from './../../../store/facade/user.facade';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ɵConsole } from '@angular/core';

export class RegisterValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}
export class RegisterAsyncValidators {
  static shouldBeUnique(userFacade: UserFacade) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        userFacade.isRegister(control.value as string);
        setTimeout(() => {
          if (userFacade.isRegister$) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        }, 500);
    });
  }
}
