import { Observable } from 'rxjs';
import { ProfileModel } from './../../core/models/profile.interface';
import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { selectProfile, SelectFullName, selectName  } from '../selectors/profile.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacade {

  profile$: Observable<ProfileModel> = this.store.pipe(select(selectProfile));
  fullname$: Observable<string> = this.store.pipe(select(SelectFullName));

  constructor(private store: Store<State> ) {}

  loadProfile() {
    this.store.dispatch({ type: '[PROFILE] LOAD_PROFILE' });
  }

  saveProfile(profile: ProfileModel) {
    this.store.dispatch({ type: '[PROFILE] EDIT_PROFILE', payload: profile });
  }
}
