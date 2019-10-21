import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { HangarActions } from '../actions/hangar.actions';
import { HangarService } from 'src/app/core/services/hangar.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hangarActions from '../actions/hangar.actions';
import { HangarsActionTypes } from '../actions/hangar.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Injectable()
export class HangarEffects {

  constructor(
    private hangarService: HangarService,
    private actions$: Actions,
    private router: Router
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
        catchError(error => of(new hangarActions.HangarsLoadFail(error)))
      )
    )
  );

  @Effect()
  saveHangar$: Observable<Action> = this.actions$.pipe(
    ofType<HangarActions>(HangarsActionTypes.NEW_HANGAR),

    switchMap((action: hangarActions.NewHangar) => {
      return this.hangarService.postHangar(action.payload).pipe(
        map( _ => ({
          type: '[HANGAR] LOAD_HANGAR',
          })
        ),
        tap(() => this.router.navigate(['hangars'])),
        catchError(error => of(new hangarActions.HangarsLoadFail(error)))
      );
    })
  );

  @Effect()
  deleteHangar$: Observable<Action> = this.actions$.pipe(
    ofType<HangarActions>(HangarsActionTypes.DELETE_HANGAR),

    switchMap((action: hangarActions.DeleteHangar) => {
      return this.hangarService.deleteHangar(action.payload.id).pipe(
        map( _ => ({
          type: '[HANGAR] LOAD_HANGAR',
          })
        ),
        tap(() => this.router.navigate(['hangars'])),
        catchError(error => of(new hangarActions.HangarsLoadFail(error)))
      );
    })
  );

  @Effect()
  editHangar$: Observable<Action> = this.actions$.pipe(
    ofType<HangarActions>(HangarsActionTypes.EDIT_HANGAR),

    switchMap((action: hangarActions.EditHangar) => {
      return this.hangarService.updateHangar(action.payload).pipe(
        map( _ => ({
          type: '[HANGAR] LOAD_HANGAR',
          })
        ),
        tap(() => this.router.navigate(['hangars'])),
        catchError(error => of(new hangarActions.HangarsLoadFail(error)))
      );
    })
  );

}
