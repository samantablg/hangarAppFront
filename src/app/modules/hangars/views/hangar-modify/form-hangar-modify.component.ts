import { CommunicationService } from './../../../../core/services/communication.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-hangar-modify',
  templateUrl: './form-hangar-modify.component.html',
  styleUrls: ['./form-hangar-modify.component.css']
})
export class FormHangarModifyComponent implements OnInit {

  hangar: HangarModel;

  constructor(private hangarService: HangarService, private comService: CommunicationService, private router: Router ) { }

  ngOnInit() {
    this.hangar = this.comService.getDataRelativeToHangar();
    if (!this.hangar) {
      this.router.navigate(['hangars']);
    }
  }
}
