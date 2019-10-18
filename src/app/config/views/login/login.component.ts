import { UserFacade } from './../../../store/facade/user.facade';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  formLogin: FormGroup;

  constructor(private router: Router, private userFacade: UserFacade) {
    this.formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
   }

  ngOnInit() {
  }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }

  checkLogin() {
    this.userFacade.authenticate(this.formLogin.value);
  }

  newUser() {
    this.router.navigate(['register']);
  }

}
