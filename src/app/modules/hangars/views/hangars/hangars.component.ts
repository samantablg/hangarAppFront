import { CommunicationService } from './../../../../core/services/communication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { HangarService } from 'src/app/core/services/hangar.service';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  hangars: HangarModel[] = [];
  private hangar: HangarModel;
  isSelected = true;
  hangarData: HangarModel;
  public currentHangar: any;
  page = 0;
  items = 5;
  total: number;

  constructor( private hangarService: HangarService, private comService: CommunicationService, private router: Router ) { }

  ngOnInit() {
    this.isSelected = false;
    this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
      this.hangars = data['content'];
      this.total = data['totalPages'];
    });
  }

  getHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.comService.setData(this.hangar);
    this.router.navigate(['/hangars/hangar', id + 1]);
  }

  hangarSelected(event: any, hangar: HangarModel) {
    this.currentHangar = hangar;
    this.isSelected = !this.isSelected;
    this.comService.setData(this.currentHangar);
  }

  public seeNext() {
    this.page++;
    if (this.page < this.total % this.items ) {
      this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
        this.hangars = data['content'];
      });
    } else {
      this.page = this.total - 1;
    }
  }

  public seePrevious() {
    this.page--;
    if ( this.page >= 0 ) {
      this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
        this.hangars = data['content'];
      });
    } else {
      this.page = 0;
    }
  }

}
