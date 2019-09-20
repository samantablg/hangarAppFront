import { Router } from '@angular/router';
import { AuthenticationService } from '../../../config/services/authentication.service';
import { Component, Output, EventEmitter, OnChanges, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name: String;
  @Output() emitChangeLang = new EventEmitter();

  constructor( public loginService: AuthenticationService) { 
    this.name = this.loginService.getName();
  }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

}
