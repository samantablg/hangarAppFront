import { AuthFacade } from './../../../../store/facade/auth.facade';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CommerceFacade } from 'src/app/store/facade/commerce.facade';

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html',
  styleUrls: ['./navbar-view.component.css']
})
export class NavbarViewComponent implements OnInit {

  username$: Observable<string>;
  isAuthenticated$: Observable<boolean>;
  productsOfOrder: Observable<number> = this.commerceFacade.totalProducts$;
  @Output() emitChangeLang = new EventEmitter();

  constructor(private authFacade: AuthFacade, private commerceFacade: CommerceFacade) { }

  ngOnInit() {
    this.username$ = this.authFacade.username$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
  }

  changeLang() {
    this.emitChangeLang.emit();
  }

  logout() {
    this.authFacade.logout();
  }
}
