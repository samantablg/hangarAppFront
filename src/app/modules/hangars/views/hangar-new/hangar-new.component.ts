import { HangarFacade } from './../../../../store/facade/hangar.facade';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hangar-new',
  templateUrl: './hangar-new.component.html',
  styleUrls: ['./hangar-new.component.css']
})
export class HangarNewComponent {

  constructor(private hangarFacade: HangarFacade) { }

  postHangar(hangar: HangarModel) {
    this.hangarFacade.newHangar(hangar);
  }

}

