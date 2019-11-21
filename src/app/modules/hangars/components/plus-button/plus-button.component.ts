import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent implements OnInit {

  @Input() isSelect: boolean;
  @Output() toggleSideBar = new EventEmitter();
  isSideBarOpened = false;

  constructor() { }

  ngOnInit() { }

}
