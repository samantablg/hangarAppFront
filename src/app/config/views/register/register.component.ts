import { AuthFacade } from '../../../store/facade/auth.facade';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserModel } from '../../../core/models/user.interface';
import { RegisterValidators, RegisterAsyncValidators } from './register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: UserModel;
  passwordVoid = false;

  formUser = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      RegisterValidators.cannotContainSpace],
      [RegisterAsyncValidators.shouldBeUnique(this.authFacade)
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
      passwordMatch: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private authFacade: AuthFacade) { }

  get username() {
    return this.formUser.get('username');
  }

  get password() {
    return this.formUser.get('password');
  }

  // FIXME: mover estas condiciones de aquí al html -> No dejar que actúa el submit si no se verifica esto
  saveUser() {
    if (this.formUser.value.password !== ''
    && this.formUser.value.password === this.formUser.value.passwordMatch /* && !this.formUser.invalid */) {
      const user: UserModel = {'username': this.formUser.value.username, 'password': this.formUser.value.password};
      this.authFacade.register(user);
    }
  }

}
