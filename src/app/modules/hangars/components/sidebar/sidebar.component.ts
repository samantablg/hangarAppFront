import { Component, HostBinding, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() hangar: HangarModel;
  @Output() getHangar = new EventEmitter<HangarModel>();
  @Output() editHangar = new EventEmitter<HangarModel>();
  @Output() manageProductsOfHangar = new EventEmitter<HangarModel>();
  @Output() deleteHangar = new EventEmitter<HangarModel>();
  @Output() newHangar = new EventEmitter();

  @HostBinding('class.is-open') @Input() isOpen: boolean;

  constructor() { }
}
