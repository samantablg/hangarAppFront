import { Observable } from 'rxjs';
import { HangarFacade } from './../../../../store/facade/hangar.facade';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hangar-modify',
  templateUrl: './hangar-modify.component.html',
  styleUrls: ['./hangar-modify.component.css']
})
export class FormHangarModifyComponent {

  hangarSelected$: Observable<HangarModel> = this.hangarFacade.hangarSelected$;

  constructor(private hangarFacade: HangarFacade ) {}

  updateHangar(hangar: HangarModel) {
    this.hangarFacade.editHangar(hangar);
  }
}
