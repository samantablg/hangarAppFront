import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl(''),
      address: new FormControl(''),
      id: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.isReadOnly || this.isEdit) {
      this.name.setValue(this.hangarSelect.name);
      this.address.setValue(this.hangarSelect.address);
      this.id.setValue(this.hangarSelect.id);
    }
  }

  get name() {
    return this.formHangar.get('name');
  }

  get address() {
    return this.formHangar.get('address');
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
