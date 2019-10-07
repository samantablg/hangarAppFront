import { HangarService } from '../../../../core/services/hangar.service';
import { ActivatedRoute } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-hangar-detail',
  templateUrl: './hangar-detail.component.html',
  styleUrls: ['./hangar-detail.component.css']
})
export class HangarDetailComponent implements OnInit {

  id: number;
  currentHangar: HangarModel;

  constructor( private route: ActivatedRoute,
               private hangarService: HangarService ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.id = data.id;
      }
    );
    this.hangarService.loadHangarById(this.id)
    .subscribe( data => {
      this.currentHangar = data;
    });
  }

}
