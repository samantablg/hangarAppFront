import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() isSelect: boolean;
  @Input() hangarSelected?: HangarModel;
  sideBarIsOpened = false;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  toggleSideBar() {
    if (this.isSelect) {
      this.sideBarIsOpened = !this.sideBarIsOpened;
    } else {
      this.router.navigate(['hangars/new']);
    }
  }

  /*toggleSideBar() {
    if (this.isSelect) {
      this.emitSideBarWithHangar.emit();
    } else {
      this.emitSideBarEmpty.emit();
    }
  }*/

}
