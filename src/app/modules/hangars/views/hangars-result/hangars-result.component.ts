import { HangarModel } from 'src/app/core/models/hangar.interface';
import { CommunicationService } from './../../../../core/services/communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangars-result',
  templateUrl: './hangars-result.component.html',
  styleUrls: ['./hangars-result.component.css']
})
export class HangarsResultComponent implements OnInit {

  hangars: HangarModel[] = [];
  hangar: HangarModel;
  existHangarsOfSearch: boolean;

  constructor(private comService: CommunicationService, private router: Router) {
    this.hangars = this.comService.getData();
    if ( this.hangars !== undefined && this.hangars.length > 0) {
      this.existHangarsOfSearch = true;
    } else {
      this.existHangarsOfSearch = false;
    }
  }

  ngOnInit() {
  }

  getHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.comService.setData(this.hangar);
    this.router.navigate(['/hangars/hangar', id + 1]);
  }


}
