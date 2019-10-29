import { Observable } from 'rxjs';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { State } from 'src/app/store/state';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectHangarList, selectLoading, selectError, selectHangarSelected, selectIsHangar } from '../selectors/hangar.selectors';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangars$ = this.store.pipe(select(selectHangarList));
  loading$ = this.store.pipe(select(selectLoading));
  error$ = this.store.pipe(select(selectError));
  hangarSelected$ = this.store.pipe(select(selectHangarSelected));
  isHangar$ = this.store.pipe(select(selectIsHangar));

  constructor(private store: Store<State>) {}

  loadHangars() {
    this.store.dispatch({ type: '[HANGAR] LOAD_HANGARS' });
  }

  selectHangar(hangar: HangarModel) {
    this.store.dispatch({ type: '[HANGAR] SELECT_HANGAR', payload: hangar});
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

  isHangar(name: string) {
    this.store.dispatch({ type: '[HANGAR] VALIDATE_HANGAR', payload: name });
  }

}
