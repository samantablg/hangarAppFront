import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import { Router } from '@angular/router';
import { HangarModel } from 'src/app/core/models/hangar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() hangar: HangarModel;
  id: number;
  insertProduct: boolean;

  @HostBinding('class.is-open') @Input() isOpen: boolean;

  constructor( private router: Router, private hangarService: HangarService ) { }

  getHangar() {
    this.id = this.hangar.id;
    this.router.navigate(['/hangars/hangar', this.id]);
  }

  modifyHangar() {
    this.id = this.hangar.id;
    this.router.navigate(['/hangars/modify', this.id]);
  }

  manageProductsOfHangar() {
    this.id = this.hangar.id;
    this.router.navigate(['/products/hangar', this.id]);
  }

  deleteHangar() {
    this.hangarService.deleteHangar(this.hangar.id).subscribe( data => {
      console.log(data);
      this.isOpen = false;
      this.router.navigate(['hangars']);
    });
  }

  newHangar() {
    this.router.navigate(['hangars/new']);
  }

}

