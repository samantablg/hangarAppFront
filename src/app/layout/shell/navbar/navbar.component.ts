import { AuthFacade } from '../../../store/facade/auth.facade';
import { AuthenticationService } from './../../../config/services/authentication.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() emitChangeLang = new EventEmitter();

  constructor(private authFacade: AuthFacade, public loginService: AuthenticationService) { }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

  logoutSession() {
    this.authFacade.logout();
  }

}
