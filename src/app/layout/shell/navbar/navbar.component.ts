import { Router } from '@angular/router';
import { AuthenticationService } from '../../../config/services/authentication.service';
import { Component, Output, EventEmitter, OnChanges, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() emitChangeLang = new EventEmitter();

  constructor( public loginService: AuthenticationService) { }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

}
