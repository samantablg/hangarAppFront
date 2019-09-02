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
    this.hangars = this.comService.getDataRelativeToHangar();
    this.existHangarsOfSearch = ( this.hangars && this.hangars.length > 0);
  }

  ngOnInit() {
  }

  getHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.comService.setDataRelativeToHangar(this.hangar);
    this.router.navigate(['/hangars/hangar', id + 1]);
  }


}
