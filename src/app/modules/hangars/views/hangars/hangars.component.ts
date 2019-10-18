import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, HostListener, ElementRef } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { HangarFacade } from 'src/app/store/facade/hangar.facade';
@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent {

  hangars$: Observable<HangarModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  isSelected: boolean;
  hangarSelected: HangarModel;
  sideBarIsOpened: boolean;

  constructor(private router: Router,  private hangarFacade: HangarFacade,private eRef: ElementRef) {

    this.hangars$ = this.hangarFacade.hangars$;
    this.loading$ = this.hangarFacade.loading$;
    this.error$ = this.hangarFacade.error$;

    this.hangarFacade.loadHangars();

  }

  @HostListener('document:click', ['$event'])
    clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target) && this.sideBarIsOpened) {
      this.sideBarIsOpened = false;
    }
    /* documentClick(event: MouseEvent) {
      if (this.sideBarIsOpened)
        this.sideBarIsOpened = false; */
    }

  selectHangar(hangar: HangarModel) {
    this.hangarFacade.selectHangar(hangar);
    this.hangarSelected = hangar;
    this.isSelected = (hangar !== null);
  }

  getHangar(hangar: HangarModel) {
    this.router.navigate(['hangars/hangar', hangar.id]);
  }

  editHangar(hangar: HangarModel) {
    this.router.navigate(['/hangars/modify', hangar.id]);
  }
  manageProductsOfHangar(hangar: HangarModel) {
    this.router.navigate(['/products/hangar', hangar.id]);
  }

  newHangar() {
    this.router.navigate(['hangars/new']);
  }

  deleteHangar(hangar: HangarModel) {
    this.hangarFacade.deleteHangar(hangar);
  }

  toggleSideBar() {
  if (this.hangarSelected) {
      this.sideBarIsOpened = true;
    } else {
      this.router.navigate(['hangars/new']);
    }
  }

}
