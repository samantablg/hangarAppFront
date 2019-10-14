import { Observable } from 'rxjs';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { State } from 'src/app/store/state';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { getHangars } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class HangarsFacade {

  // hangars$: Observable<HangarModel[]> = this.store.select('hangars');

  constructor(private store: Store<State>, private actions$: Action) {}

  loadHangars() {
    this.store.dispatch({ type: '[HANGAR] LOAD_HANGARS' });
  }


}
