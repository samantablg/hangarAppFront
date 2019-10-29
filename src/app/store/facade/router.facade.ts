import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { selectId, selectUrl } from '../selectors/router.selectors';
@Injectable({
  providedIn: 'root'
})
export class RouterFacade {

  id$: Observable<number> = this.store.pipe(select(selectId));
  url$: Observable<string> = this.store.pipe(select(selectUrl));

  constructor(private store: Store<State>) { }
}
