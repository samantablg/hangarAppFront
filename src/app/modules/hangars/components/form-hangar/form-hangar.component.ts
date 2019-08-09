import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HangarService } from '../../../../core/services/hangar.service';

@Component({
  selector: 'app-form-hangar',
  templateUrl: './form-hangar.component.html',
  styleUrls: ['./form-hangar.component.css']
})
export class FormHangarComponent implements OnInit {

  @Input() isReadOnly?: boolean;
  @Input() isEdit?: boolean;
  @Input() hangarSelect: HangarModel;
  @Input() addNewHangar?: boolean;
  formHangar: FormGroup;
  hangar: HangarModel;

  constructor( private hangarService: HangarService ) {
    this.formHangar = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]
      ),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      owner: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]
      ),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ]
      ),
      id: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.isReadOnly || this.isEdit) {
      this.name.setValue(this.hangarSelect.name);
      this.address.setValue(this.hangarSelect.address);
      this.owner.setValue(this.hangarSelect.owner);
      this.email.setValue(this.hangarSelect.email);
      this.phone.setValue(this.hangarSelect.phone);
      this.id.setValue(this.hangarSelect.id);
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
      return this.hangarService.updateHangar(this.formHangar.value);
    }
    return this.hangarService.postHangar(this.formHangar.value);
  }

}
