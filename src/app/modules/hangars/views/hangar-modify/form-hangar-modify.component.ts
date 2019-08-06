import { CommunicationService } from './../../../../core/services/communication.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';

@Component({
  selector: 'app-form-hangar-modify',
  templateUrl: './form-hangar-modify.component.html',
  styleUrls: ['./form-hangar-modify.component.css']
})
export class FormHangarModifyComponent implements OnInit {

  hangar: HangarModel;

  constructor(private hangarService: HangarService, private comService: CommunicationService ) { }

  ngOnInit() {
    this.hangar = this.comService.getData();
  }
}
