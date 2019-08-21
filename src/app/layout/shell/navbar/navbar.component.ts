import { AuthenticationService } from '../../../core/services/config/authentication.service';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string;

  @Output() emitChangeLang = new EventEmitter();

  constructor( public loginService: AuthenticationService ) { }

  ngOnInit() {
    this.user = this.loginService.getName();
   }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

}
