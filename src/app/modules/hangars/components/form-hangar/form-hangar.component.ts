import { HangarFacade } from 'src/app/store/facade/hangar.facade';
import { HangarAsyncValidators } from './form-hangar.validators';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-hangar',
  templateUrl: './form-hangar.component.html',
  styleUrls: ['./form-hangar.component.css']
})
export class FormHangarComponent implements OnInit {
  @Input() isReadOnly?: boolean;
  @Input() isEdit?: boolean;
  @Input() hangarSelected?: HangarModel;
  @Input() action: string;
  @Output() actionHangar = new EventEmitter<HangarModel>();
  hangar: HangarModel;

  // TODO: hay que manejar las validaciones asíncronas de otra manera
  formHangar = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)],
      [HangarAsyncValidators.shouldBeUnique(this.hangarFacade)]
    ),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    owner: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9)
    ]),
    id: new FormControl(''),
    state: new FormControl(true)
  });

  constructor(private hangarFacade: HangarFacade) { }

  ngOnInit() {
    if (this.hangarSelected) {
      this.name.setValue(this.hangarSelected.name);
      this.address.setValue(this.hangarSelected.address);
      this.owner.setValue(this.hangarSelected.owner);
      this.email.setValue(this.hangarSelected.email);
      this.phone.setValue(this.hangarSelected.phone);
      this.id.setValue(this.hangarSelected.id);
    }
  }

  get name() {
    return this.formHangar.get('name');
  }

  get address() {
    return this.formHangar.get('address');
  }

  get owner() {
    return this.formHangar.get('owner');
  }

  get email() {
    return this.formHangar.get('email');
  }

  get phone() {
    return this.formHangar.get('phone');
  }

  get id() {
    return this.formHangar.get('id');
  }

  hangarAction() {
    if (this.isReadOnly) {
      this.actionHangar.emit(this.hangarSelected);
    } else {
      this.hangar = this.formHangar.value;
      this.actionHangar.emit(this.hangar);
    }
  }

}
