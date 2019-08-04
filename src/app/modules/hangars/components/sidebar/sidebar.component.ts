import { Component, HostBinding, Input } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() setHangar: HangarModel;
  id: number;

  constructor( private router: Router, private hangarService: HangarService ) { }

  @HostBinding('class.is-open') @Input()
  isOpen = true;

  getHangar() {
    this.id = this.setHangar.id;
    this.router.navigate(['/hangars/hangar', this.id + 1], {state: {data: this.setHangar}});
  }

  modifyHangar() {
    this.id = this.setHangar.id;
    this.router.navigate(['/hangars/modify'], {state: {data: this.setHangar}});
  }

  newHangar() {
    this.router.navigate(['hangars/new']);
  }

}
