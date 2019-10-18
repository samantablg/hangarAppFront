import { Observable } from 'rxjs';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { MinifiedModel } from 'src/app/core/models/minified.interface';
import { State } from 'src/app/store/state';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangars$: Observable<HangarModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  hangarSelected$: Observable<HangarModel>;

  constructor(private store: Store<State>) {
    this.hangars$ = this.store.pipe(select('hangar', 'hangars'));
    this.loading$ = this.store.pipe(select('hangar', 'loading'));
    this.error$ = this.store.pipe(select('hangar', 'error'));
    this.hangarSelected$ = this.store.pipe(select('hangar', 'hangarSelected'));
  }

  loadHangars() {
    this.store.dispatch({ type: '[HANGAR] LOAD_HANGARS' });
  }

  selectHangar(hangar: HangarModel) {
    this.store.dispatch({ type: '[HANGAR] SELECT_HANGAR', payload: hangar});
  }

  getHangarSelected(): Observable<HangarModel> {
    return this.store.pipe(select('hangar', 'hangarSelected'));
  }

  deleteHangar(hangar: HangarModel) {
    this.store.dispatch({ type: '[HANGAR] DELETE_HANGAR', payload: hangar });
  }

  newHangar(hangar: HangarModel) {
    this.store.dispatch({ type: '[HANGAR] NEW_HANGAR', payload: hangar});
  }

  editHangar(hangar: HangarModel) {
    this.store.dispatch({type: '[HANGAR] EDIT_HANGAR', payload: hangar});
  }

  /* genMinifiedHangars() {} */

}
