import { DeleteHangar, HangarActions } from './../actions/hangars.actions';
import { HangarService } from 'src/app/core/services/hangar.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import * as hangar from '../actions/index';
import { HangarsActionTypes } from '../actions/hangars.actions';
import { switchMap, map, catchError, exhaustMap } from 'rxjs/operators';
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

  @Effect()
  deleteHangar$ = this.actions$.pipe(
    ofType(HangarsActionTypes.DELETE_HANGAR),
    switchMap( (action: hangar.DeleteHangar) => {
      console.log(action.payload);
      this.hangarService.deleteHangar(action.payload.id)
      .subscribe(response => {
        console.log(response);
      });
    })
  );
        /*
      .pipe(
        map(response => console.log(response))
      );
    })
      */

}
