import { Observable } from 'rxjs';
import { State } from '../state/index';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.interface';
import { selectIsRegister, selectUsername, selectIsAuthenticated } from '../selectors/auth.selectors';
@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  isRegister$: Observable<boolean> = this.store.pipe(select(selectIsRegister));
  username$: Observable<string> = this.store.pipe(select(selectUsername));
  isAuthenticated$: Observable<boolean> = this.store.pipe(select(selectIsAuthenticated));

  constructor(private store: Store<State>) {}

  authenticate(user: UserModel) {
    this.store.dispatch({ type: '[AUTH] LOGIN_AUTH', payload: user});
  }

  logout() {
    this.store.dispatch({ type: '[AUTH] LOGOUT_AUTH'});
  }

  register(user: UserModel) {
    this.store.dispatch({ type: '[AUTH] REGISTER_AUTH', payload: user});
  }

  isRegister(name: string) {
    this.store.dispatch({ type: '[AUTH] VALIDATE_AUTH', payload: name });
  }
}
