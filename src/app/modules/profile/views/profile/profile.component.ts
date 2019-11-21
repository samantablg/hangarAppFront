import { ProfileFacade } from './../../../../store/facade/profile.facade';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/core/models/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<ProfileModel>;
  isEdit = false;

  constructor(private profileFacade: ProfileFacade) { }

  ngOnInit() {
    this.profile$ = this.profileFacade.profile$;
    this.profileFacade.loadProfile();
  }

  isFormEdit() {
    this.isEdit = !this.isEdit;
    console.log(this.isEdit);
  }

  updateProfile(profile) {
    this.profileFacade.saveProfile(profile);
  }

}
