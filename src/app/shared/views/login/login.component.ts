import { AuthenticationService } from './../../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginService.aunthenticate(this.username, this.password).subscribe( userData => {
        if (userData.token != null) {
          sessionStorage.setItem('username', this.username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          this.invalidLogin = false;
          this.router.navigate(['']);
        } else {
          this.invalidLogin = true;
        }
      });
  }

}
