import { UserActionTypes } from './../actions/user.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthenticationService } from './../../config/services/authentication.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Observable, pipe, of } from 'rxjs';
import * as userActions from '../actions/user.actions';
import { RegisterService } from 'src/app/config/services/register.service';

@Injectable()
export class UserEffects {

  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private actions$: Actions,
              private router: Router) {}

  @Effect({ dispatch: false})
  authenticate$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.LOGIN_USER),
    switchMap((action: userActions.LoginUser) =>
      this.authService.authenticate(action.payload.username, action.payload.password).pipe(
        map( response => {
          const tokenStr = 'Bearer ' + response.token;
          sessionStorage.setItem('username', action.payload.username);
          sessionStorage.setItem('token', tokenStr);
        }),
        tap(() => this.router.navigate([''])),
        catchError((error) => of(new userActions.LoginUserFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  logout$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.LOGOUT_USER),
    tap(() => {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      this.router.navigate(['login']);
    })
  );

  @Effect()
  register$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.REGISTER_USER),
    switchMap((action: userActions.RegisterUser) => {
      return this.registerService.postUser(action.payload).pipe(
        map((response) => console.log(response)),
        tap(() => this.router.navigate(['login'])),
        catchError((error) => of(new userActions.RegisterUserFail(error)))
      );
    })
  );

  @Effect()
  isRegister$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.VALIDATE_USER),

    switchMap((action: userActions.ValidateUser) => {
      return this.registerService.isUserByUsername(action.payload).pipe(
        map( response => {
          console.log('effect: ' + response);
          return ({
            type: '[USER] VALIDATED_USER', payload: response
          });
        })
      );
    })
  );

}
