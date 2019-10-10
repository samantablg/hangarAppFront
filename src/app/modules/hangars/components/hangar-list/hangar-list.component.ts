import { Observable } from 'rxjs';
import { HangarModel } from '../../../../core/models/hangar.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangar-list',
  templateUrl: './hangar-list.component.html',
  styleUrls: ['./hangar-list.component.css']
})
export class HangarListComponent implements OnInit {

  @Input() hangars$: Observable<HangarModel[]>;
  @Input() loading: boolean;
  @Input() error: any;
  @Output() seeNextHangars = new EventEmitter();
  @Output() seePreviousHangars = new EventEmitter();
  hangarSelected: HangarModel;
  isSelected = false;

  constructor( private router: Router) { }

  ngOnInit() { }

  getHangar(hangar: HangarModel) {
    this.router.navigate(['hangars/hangar', hangar.id]);
  }

  selectHangar(hangar: HangarModel) {
    this.hangarSelected = hangar;
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);
  }
}
