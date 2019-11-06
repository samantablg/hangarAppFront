import { Router } from '@angular/router';
import { HangarFacade } from '../../../../store/facade/hangar.facade';
import { AuthFacade } from '../../../../store/facade/auth.facade';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CommerceFacade } from 'src/app/store/facade/commerce.facade';
import { ProductFacade } from 'src/app/store/facade/product.facade';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarViewComponent implements OnInit {

  username$: Observable<string>;
  isAuthenticated$: Observable<boolean>;
  productsOfOrder: Observable<number> = this.commerceFacade.totalProducts$;
  @Output() emitChangeLang = new EventEmitter();

  constructor(private authFacade: AuthFacade,
              private commerceFacade: CommerceFacade,
              private hangarFacade: HangarFacade,
              private productFacade: ProductFacade,
              private router: Router) { }

  ngOnInit() {
    this.username$ = this.authFacade.username$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
  }

  search(text: string) {
    this.router.navigate(['search/', text]);
  }

  loadData() {
    this.hangarFacade.isHangarsLoaded();
    this.productFacade.isProductsLoaded();
  }

  changeLang() {
    this.emitChangeLang.emit();
  }

  logout() {
    this.authFacade.logout();
  }
}
