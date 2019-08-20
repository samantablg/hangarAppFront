import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './../../../core/services/authentication.service';
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

  constructor(private router: Router, private loginService: AuthenticationService) {
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
    this.loginService.aunthenticate(this.formLogin.value.username, this.formLogin.value.password).subscribe( userData => {
        if (userData.token != null) {
          sessionStorage.setItem('username', this.formLogin.value.username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          this.invalidLogin = false;
          this.router.navigate(['']);
        } else {
          this.invalidLogin = true;
        }
      });
  }

  newUser() {
    this.router.navigate(['register']);
  }

}
