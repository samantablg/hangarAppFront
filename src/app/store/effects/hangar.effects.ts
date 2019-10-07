import { HangarService } from 'src/app/core/services/hangar.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hangar from '../actions/hangar.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class HangarsEffects {

  constructor(private hangarService: HangarService, private actions$: Actions) {}

  @Effect()
  loadHangars$ = this.actions$.pipe(
    ofType(hangar.LOAD_HANGARS),
    switchMap(() => this.hangarService.loadHangars()
      .pipe(
        map(hangars => ({ type: '[HANGAR] LOADED_HANGARS', payload: hangars })
        )
      )
    )
  );

  @Effect()
  loadHangarsPage$ = this.actions$.pipe(
    ofType(hangar.LOAD_HANGARS_PAGE),
    switchMap(() => this.hangarService.loadHangarsPage(0, 14)
    .pipe(
      map(hangars => ({type: '[HANGAR] LOADED_HANGARS_PAGE', payload: hangars }))
      )
    )
  );

}
