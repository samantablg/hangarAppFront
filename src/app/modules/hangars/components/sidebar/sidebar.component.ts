import { CommunicationService } from './../../../../core/services/communication.service';
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
  insertProduct: boolean;

  constructor( private router: Router, private hangarService: HangarService, private comService: CommunicationService ) { }

  @HostBinding('class.is-open') @Input()
  isOpen = true;

  getHangar() {
    this.id = this.setHangar.id;
    this.comService.setDataRelativeToHangar(this.setHangar);
    this.router.navigate(['/hangars/hangar', this.id + 1]);
  }

  modifyHangar() {
    this.id = this.setHangar.id;
    this.comService.setDataRelativeToHangar(this.setHangar);
    this.router.navigate(['/hangars/modify']);
  }

  addProductsToHangar() {
    this.id = this.setHangar.id;
    this.comService.setDataRelativeToHangar(this.setHangar);
    this.router.navigate(['/products/hangar', this.id + 1]);
  }

  deleteHangar() {
    this.hangarService.deleteHangar(this.setHangar.id).subscribe( data => {
      console.log(data);
      this.isOpen = false;
      this.router.navigate(['']);
    });
  }

  newHangar() {
    this.router.navigate(['hangars/new']);
  }

}
