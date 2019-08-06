import { HangarModel } from 'src/app/core/models/hangar.interface';
import { HangarService } from 'src/app/core/services/hangar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangars-pag',
  templateUrl: './hangars-pag.component.html',
  styleUrls: ['./hangars-pag.component.css']
})
export class HangarsPagComponent implements OnInit {

  hangars: HangarModel[] = [];
  page = 0;
  items = 5;
  total: number;

  constructor( private hangarService: HangarService ) { }

  ngOnInit() {
    this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.hangars = data['content'];
      // tslint:disable-next-line: no-string-literal
      this.total = data['totalPages'];
      console.log(this.hangars);
    });
  }

  public seeNext() {
    this.page += 1;
    if (this.page < this.total % this.items ) {
      this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
        this.hangars = data['content'];
      });
    } else {
      this.page = 2;
    }
  }

  public seePrevious() {
    this.page -= 1;
    if ( this.page >= 0 ) {
      this.hangarService.loadHangarsPage(this.page, this.items).subscribe( data => {
        this.hangars = data['content'];
      });
    } else {
      this.page = 0;
    }
  }

}
