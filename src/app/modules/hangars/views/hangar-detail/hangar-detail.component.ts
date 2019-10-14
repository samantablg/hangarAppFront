import { HangarService } from './../../../../core/services/hangar.service';
import { State } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterStateUrl } from 'src/app/store/state/router.state';


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
  routerStore: Observable<RouterStateUrl>;

  constructor(private store: Store<State>, private hangarService: HangarService, private router: Router ) { }

  ngOnInit() {
    this.store.select('route', 'state', 'params')
    .subscribe( data => {
      this.id = parseInt(data.id, 10);
    });

    this.store.select('hangars')
    .subscribe( data => {
      this.hangar = data.hangars.filter(hangar => hangar.id === this.id).pop();
   });
  }

  deleteHangar(hangar: HangarModel) {
    this.store.dispatch({ type: '[HANGAR] DELETE_HANGAR', payload: hangar });
    /* this.hangarService.deleteHangar(hangar.id)
    .subscribe( () =>
      this.router.navigate(['/hangars'])
    ); */
  }

}
