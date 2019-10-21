import { State } from '../state/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  // isRegister$: Observable<boolean>;
  isRegister$: boolean;

  constructor(private store: Store<State>) {
    // this.isRegister$ = this.store.pipe(select('auth', 'isRegister'));
    this.store.select('auth', 'isRegister')
    .subscribe(response => {
      this.isRegister$ = response;
    });
  }

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
