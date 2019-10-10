import { HangarService } from 'src/app/core/services/hangar.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hangar from '../actions/index';
import { HangarsActionTypes } from '../actions/hangars.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HangarsEffects {
  constructor(
    private hangarService: HangarService,
    private actions$: Actions
  ) {}

  @Effect()
  loadHangars$ = this.actions$.pipe(
    ofType(HangarsActionTypes.LOAD_HANGARS),
    switchMap(() =>
      this.hangarService.loadHangars().pipe(
        map(response => ({
          type: '[HANGAR] LOADED_HANGARS',
          payload: response
        })),
        catchError(error => of(new hangar.HangarsLoadFail(error)))
      )
    )
  );

  /* @Effect()
  loadHangar$ = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGAR),
    switchMap(action => {
      const id = action['payload'];

      return this.hangarService.loadHangarById(id).pipe(
        map(response => ({
          type: '[HANGAR] LOADED_HANGAR',
          payload: response
        })),
        catchError(error => of(new hangar.HangarLoadFail(error)))
      );
    })
  ); */

  /* @Effect()
  loadHangarsPage$ = this.actions$.pipe(
    ofType(HangarsActionTypes.LOAD_HANGARS_PAGE),
    switchMap(() => this.hangarService.loadHangarsPage(0, 14)
    .pipe(
      map(hangars => ({type: '[HANGAR] LOADED_HANGARS_PAGE', payload: hangars }))
      )
    )
  ); */
}
