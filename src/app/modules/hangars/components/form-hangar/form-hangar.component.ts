import { HangarAsyncValidators } from './form-hangar.validators';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-hangar',
  templateUrl: './form-hangar.component.html',
  styleUrls: ['./form-hangar.component.css']
})
export class FormHangarComponent implements OnInit {
  @Input() isReadOnly?: boolean;
  @Input() isEdit?: boolean;
  @Input() hangarSelect?: HangarModel;
  @Input() addNewHangar?: boolean;
  @Output() postHangar = new EventEmitter<HangarModel>();
  @Output() updateHangar = new EventEmitter<HangarModel>();
  @Output() deleteHangar = new EventEmitter<HangarModel>();

  formHangar = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)],
      [HangarAsyncValidators.shouldBeUnique(this.hangarService)]
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

  constructor(private hangarService: HangarService, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.isReadOnly || this.isEdit) {
      this.route.params
      .subscribe( data => {
        this.hangarService.loadHangarById(data.id)
          .subscribe( response => {
            console.log(response);
            this.hangarSelect = response;
            this.name.setValue(this.hangarSelect.name);
            this.address.setValue(this.hangarSelect.address);
            this.owner.setValue(this.hangarSelect.owner);
            this.email.setValue(this.hangarSelect.email);
            this.phone.setValue(this.hangarSelect.phone);
            this.id.setValue(this.hangarSelect.id);
          });
        }
      );
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

  saveHangar() {
    if (this.isEdit) {
      this.updateHangar.emit(this.formHangar.value);
    } else {
      if (!this.formHangar.invalid) {
        this.postHangar.emit(this.formHangar.value);
      }
    }
  }

}
