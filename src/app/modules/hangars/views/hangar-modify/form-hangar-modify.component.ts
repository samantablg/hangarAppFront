import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-hangar-modify',
  templateUrl: './form-hangar-modify.component.html',
  styleUrls: ['./form-hangar-modify.component.css']
})
export class FormHangarModifyComponent  {
  constructor() { }
}
