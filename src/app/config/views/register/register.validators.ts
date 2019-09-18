import { AbstractControl, ValidationErrors } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

export class RegisterValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}

export class RegisterAsyncValidators {
  static shouldBeUnique(registerService: RegisterService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
      (resolve, reject) => {
        registerService.isUserByUsername(control.value as string)
        .subscribe(response => {
          if (response) {
            resolve({shouldBeUnique: true});
          } else {
            resolve(null);
          }
        });
    });
  }
}
