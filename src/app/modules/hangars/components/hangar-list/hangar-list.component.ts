import { HangarModel } from '../../../../core/models/hangar.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hangar-list',
  templateUrl: './hangar-list.component.html',
  styleUrls: ['./hangar-list.component.css']
})
export class HangarListComponent implements OnInit {

  @Input() hangars$?: HangarModel[];
  @Input() hangarSelected?: HangarModel;
  @Input() loading: boolean;
  @Input() error: any;
  @Output() seeNextHangars = new EventEmitter();
  @Output() seePreviousHangars = new EventEmitter();
  @Output() selectHangar = new EventEmitter<HangarModel>();
  @Output() getHangar = new EventEmitter<HangarModel>();
  page = 0;

  constructor() { }

  ngOnInit() { }
}
