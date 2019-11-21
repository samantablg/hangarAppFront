import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './views/profile/profile.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProfileComponent, FormProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
