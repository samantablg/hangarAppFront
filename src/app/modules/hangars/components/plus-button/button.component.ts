import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() isSelect: boolean;
  @Output() toggleSideBar = new EventEmitter();
  isSideBarOpened = false;

  constructor() { }

  ngOnInit() { }

}
