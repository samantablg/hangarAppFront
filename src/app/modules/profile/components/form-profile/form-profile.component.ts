import { FormBuilder } from '@angular/forms';
import { ProfileModel } from './../../../../core/models/profile.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css']
})
export class FormProfileComponent implements OnInit, OnChanges {

  @Input() profile: ProfileModel;
  @Input() isEdit: boolean;
  @Output() isFormEdit = new EventEmitter();
  @Output() saveProfile = new EventEmitter<ProfileModel>();
  editProfile: ProfileModel;

  form =  this.formBuilder.group({
    id: [''],
    name: ['', { updateOn: 'blur' }],
    surname: [''],
    mail: [''],
    phone: [''],
    address: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id.setValue(this.profile.id);
    this.name.setValue(this.profile.name);
    this.surname.setValue(this.profile.surname);
    this.mail.setValue(this.profile.mail);
    this.phone.setValue(this.profile.phone);
    this.address.setValue(this.profile.address);

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue(this.profile);
  }

  /* onFormChanges() {
    this.formProfile.controls['name'].valueChanges
    .subscribe( val => console.log(val) );
   } */


  get id() {
    return this.form.get('id');
  }

  get name() {
    return this.form.get('name');
  }

  get surname() {
    return this.form.get('surname');
  }

  get mail() {
    return this.form.get('mail');
  }

  get phone() {
    return this.form.get('phone');
  }

  get address() {
    return this.form.get('address');
  }

  save() {
    this.editProfile = this.form.value;
    console.log(this.editProfile);
    this.saveProfile.emit(this.editProfile);

  }

}
