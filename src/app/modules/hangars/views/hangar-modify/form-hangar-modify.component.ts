import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HangarService } from '../../../../core/services/hangar.service';

@Component({
  selector: 'app-form-hangar-modify',
  templateUrl: './form-hangar-modify.component.html',
  styleUrls: ['./form-hangar-modify.component.css']
})
export class FormHangarModifyComponent {

  @Input() hangar: HangarModel;

  constructor(private hangarService: HangarService, private router: Router) {
    this.hangar = this.router.getCurrentNavigation().extras.state.data;
  }
  
}
