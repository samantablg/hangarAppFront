import { AuthFacade } from '../../../store/facade/auth.facade';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authFacade: AuthFacade) {}

  ngOnInit() { }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }

  checkLogin() {
    this.authFacade.authenticate(this.formLogin.value);
  }

  newUser() {
    this.router.navigate(['register']);
  }

}
