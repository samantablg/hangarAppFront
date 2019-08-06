import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hangar-new',
  templateUrl: './hangar-new.component.html',
  styleUrls: ['./hangar-new.component.css']
})
export class HangarNewComponent implements OnInit {

  @HostBinding('class.new-hangar') @Input()
  newHangar = false;

  constructor() { }

  ngOnInit() {
  }

}

