import { FormGroup, FormControl } from '@angular/forms';
import { ProfileModel } from './../../../../core/models/profile.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css']
})
export class FormProfileComponent implements OnInit {

  @Input() profile: ProfileModel;

  formProfile = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.id.setValue(this.profile.id);
    this.name.setValue(this.profile.name);
    this.surname.setValue(this.profile.surname);
    this.mail.setValue(this.profile.mail);
    this.phone.setValue(this.profile.phone);
    this.address.setValue(this.profile.address);
  }

  get id() {
    return this.formProfile.get('id');
  }

  get name() {
    return this.formProfile.get('name');
  }

  get surname() {
    return this.formProfile.get('surname');
  }

  get mail() {
    return this.formProfile.get('mail');
  }

  get phone() {
    return this.formProfile.get('phone');
  }

  get address() {
    return this.formProfile.get('address');
  }
}
