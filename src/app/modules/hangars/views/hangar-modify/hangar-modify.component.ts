import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component } from '@angular/core';
import { HangarService } from '../../../../core/services/hangar.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hangar-modify',
  templateUrl: './hangar-modify.component.html',
  styleUrls: ['./hangar-modify.component.css']
})
export class FormHangarModifyComponent  {

  constructor(private hangarService: HangarService, private router: Router ) { }

  updateHangar(hangar: HangarModel) {
    this.hangarService.updateHangar(hangar)
    .subscribe( data => {
      window.alert('hangar modified');
      this.router.navigate(['hangars']);
    }, err => {
      window.alert('error');
    });
  }
}
