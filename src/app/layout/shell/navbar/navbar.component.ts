import { AuthenticationService } from './../../../config/services/authentication.service';
import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() emitChangeLang = new EventEmitter();

  constructor( private router: Router, public loginService: AuthenticationService ) { }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

  logoutSession() {
    this.router.navigate(['/logout']);
  }

}
