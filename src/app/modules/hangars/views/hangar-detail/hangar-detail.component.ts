import { State } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangar-detail',
  templateUrl: './hangar-detail.component.html',
  styleUrls: ['./hangar-detail.component.css']
})
export class HangarDetailComponent implements OnInit {

  id: number;
  hangar: HangarModel;
  loading: boolean;
  error: any;

  constructor( private route: ActivatedRoute,
               private store: Store<State> ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = parseInt(params.id, 10);
      }
    );

    this.store.select('hangars')
    .subscribe( data => {
      this.hangar = data.hangars.filter(hangar => hangar.id === this.id).pop();
   });

  }

}
