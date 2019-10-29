import { ProfileActionTypes } from './../actions/profile.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommerceService } from './../../core/services/commerce.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as profileActions from '../actions/profile.actions';


@Injectable()
export class ProfileEffects {

  constructor(private commerceService: CommerceService,
              private actions$: Actions) {}

  @Effect()
  loadProfile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.LOAD_PROFILE),
    switchMap(() => this.commerceService.getProfile()
      .pipe(
        map(profile => ({
          type: '[PROFILE] LOADED_PROFILE',
          payload: profile
          })
        ),
        catchError(error => of(new profileActions.FailProfile(error)) )
      )
    )
  );
}
