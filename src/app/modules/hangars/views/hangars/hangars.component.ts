import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
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

  constructor( private hangarService: HangarService, private router: Router ) { }


  ngOnInit() {
    this.isSelected = false;
    this.hangarService.loadHangars().subscribe( data => {
      this.hangars = data;
    });
  }

  getHangar( id: number ) {
    this.hangar = this.hangars[id];
    this.router.navigate(['/hangars/hangar', id + 1], {state: {data: this.hangar}});
  }

  hangarSelected(event: any, hangar: HangarModel) {
    this.currentHangar = hangar;
    this.isSelected = !this.isSelected;
    console.log(this.currentHangar);
    this.selectHangarAction();
  }

  public selectHangarAction() {
    if (this.isSelected) {
      console.log('hangar is selected');
    } else {
      console.log('no select');
    }
  }

}
