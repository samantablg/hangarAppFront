import { AuthFacade } from '../../../store/facade/auth.facade';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegisterValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}
export class RegisterAsyncValidators {
  static shouldBeUnique(authFacade: AuthFacade) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        authFacade.isRegister(control.value as string);
        setTimeout(() => {
          if (authFacade.isRegister$) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        }, 1000);
    });
  }
}
