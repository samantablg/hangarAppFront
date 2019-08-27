import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { UserModel } from '../../../core/models/user.interface';
import { Router } from '@angular/router';
import { RegisterValidators, RegisterAsyncValidators } from './register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup;
  user: UserModel;
  passwordIncorrect: boolean;
  passwordVoid = false;

  constructor(private registerService: RegisterService, private router: Router) {
    this.formUser = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        RegisterValidators.cannotContainSpace],
        [RegisterAsyncValidators.shouldBeUnique(this.registerService)]),
      password: new FormControl('', [
        Validators.required
      ]),
      passwordMatch: new FormControl('', [
        Validators.required
      ]),
    });
   }

  ngOnInit() { }

  get username() {
    return this.formUser.get('username');
  }

  get password() {
    return this.formUser.get('password');
  }

  saveUser() {
    if (this.formUser.value.password !== '' && this.formUser.value.password === this.formUser.value.passwordMatch ) {
      this.passwordIncorrect = false;
      console.log(this.formUser.invalid);
      if (!this.formUser.invalid) {
        const user: UserModel = {'username': this.formUser.value.username, 'password': this.formUser.value.password};
        this.registerService.postUser(user);
        window.alert('user save');
        this.router.navigate(['/login']);
      }
    } else {
       this.passwordIncorrect = true;
    }
  }

}
