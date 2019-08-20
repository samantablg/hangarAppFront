import { AuthenticationService } from './../../../core/services/authentication.service';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string;

  @Output() emitChangeLang = new EventEmitter();

  constructor( public loginService: AuthenticationService ) {
    this.user = loginService.getName();
  }

  ngOnInit() { }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

}
