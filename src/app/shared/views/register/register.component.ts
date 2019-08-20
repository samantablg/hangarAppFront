import { UserModel } from './../../../core/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/core/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup;
  user: UserModel;

  constructor(private registerService: RegisterService, private router: Router) {
    this.formUser = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
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
    console.log(this.formUser.value);
    this.registerService.postUser(this.formUser.value);
    this.router.navigate(['login']);
  }

}
