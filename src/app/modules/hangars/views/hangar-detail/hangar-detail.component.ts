import { CommunicationService } from './../../../../core/services/communication.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangar-detail',
  templateUrl: './hangar-detail.component.html',
  styleUrls: ['./hangar-detail.component.css']
})
export class HangarDetailComponent implements OnInit {

  hangar: HangarModel;

  constructor( private comService: CommunicationService, private router: Router ) { }

  ngOnInit() {
    this.hangar = this.comService.getDataRelativeToHangar();
    if (!this.hangar) {
      this.router.navigate(['hangars']);
    }
  }

}
