import { Component, OnInit } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state';
@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  hangars: HangarModel[] = [];
  loading: boolean;
  error: any;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.store.select('hangars')
      .subscribe( data => {
        this.hangars = data.hangars;
        this.loading = data.loading;
        this.error = data.error;
      });

    this.store.dispatch({ type: '[HANGAR] LOAD_HANGARS' });
  }

}
