import { Observable } from 'rxjs';
import { State } from './../state/index';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.interface';
import { LogoutUser } from '../actions/user.actions';
@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  // isRegister$: Observable<boolean>;
  isRegister$: boolean;

  constructor(private store: Store<State>) {
    // this.isRegister$ = this.store.pipe(select('user', 'isRegister'));
  }

  authenticate(user: UserModel) {
    this.store.dispatch({ type: '[USER] LOGIN_USER', payload: user});
  }

  logout() {
    this.store.dispatch({ type: '[USER] LOGOUT_USER'});
  }

  register(user: UserModel) {
    this.store.dispatch({ type: '[USER] REGISTER_USER', payload: user});
  }

  isRegister(name: string) {
    this.store.dispatch({ type: '[USER] VALIDATE_USER', payload: name });
    this.store.select('user', 'isRegister')
    .subscribe(response => {
      this.isRegister$ = response;
    });
  }
}
