import { Component, OnInit, Input } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() isSelect: boolean;
  @Input() hangarSelected: HangarModel;
  sideBarIsOpened = false;
  addNewHangar = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar(shouldOpen: boolean) {
    if (this.isSelect) {
      this.sideBarIsOpened = !this.sideBarIsOpened;
    } this.addNewHangar = !this.addNewHangar;

  }


}
