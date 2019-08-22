import { AuthenticationService } from '../../../core/services/config/authentication.service';
import { Component, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

  user: string;

  @Output() emitChangeLang = new EventEmitter();

  constructor( public loginService: AuthenticationService ) {
    this.user = this.loginService.getName();
   }

  ngOnChanges(changes: SimpleChanges) { }

  emitLanguage() {
    this.emitChangeLang.emit();
  }

}
