import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterFacade {

  id$: number;

  constructor(private store: Store<State>) {
    this.store.select('route', 'state', 'params')
    .subscribe(response => {
      this.id$ = parseInt(response.id, 10);
    });
  }
}
