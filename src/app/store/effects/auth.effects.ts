import { AuthActionTypes } from '../actions/auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../config/services/authentication.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as authActions from '../actions/auth.actions';
import { RegisterService } from 'src/app/config/services/register.service';

@Injectable()
export class AuthEffects {

  constructor(private authService: AuthenticationService,
              private registerService: RegisterService,
              private actions$: Actions,
              private router: Router) {}

  @Effect({ dispatch: false})
  authenticate$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_AUTH),
    switchMap((action: authActions.LoginAuth) =>
      this.authService.authenticate(action.payload.username, action.payload.password).pipe(
        map( response => {
          const tokenStr = 'Bearer ' + response.token;
          sessionStorage.setItem('username', action.payload.username);
          sessionStorage.setItem('token', tokenStr);
        }),
        tap(() => this.router.navigate([''])),
        catchError((error) => of(new authActions.LoginAuthFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  logout$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT_AUTH),
    tap(() => {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      this.router.navigate(['login']);
    })
  );

  @Effect()
  register$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER_AUTH),
    switchMap((action: authActions.RegisterAuth) => {
      return this.registerService.postUser(action.payload).pipe(
        map((response) => console.log(response)),
        tap(() => this.router.navigate(['login'])),
        catchError((error) => of(new authActions.RegisterAuthFail(error)))
      );
    })
  );

  @Effect()
  isRegister$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.VALIDATE_AUTH),

    switchMap((action: authActions.ValidateAuth) => {
      return this.registerService.isUserByUsername(action.payload).pipe(
        map( response => ({
            type: '[AUTH] VALIDATED_AUTH', payload: response
          })
        )
      );
    })
  );

}
