import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() isSelect: boolean;
  @Output() toggleSideBar = new EventEmitter();
  isSideBarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() { }

}
