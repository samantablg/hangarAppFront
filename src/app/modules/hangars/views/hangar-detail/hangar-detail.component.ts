import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangar-detail',
  templateUrl: './hangar-detail.component.html',
  styleUrls: ['./hangar-detail.component.css']
})
export class HangarDetailComponent {

  @Input() hangar: HangarModel;

  constructor(private hangarService: HangarService, private router: Router) {
    this.hangar = this.router.getCurrentNavigation().extras.state.data;
  }

}
