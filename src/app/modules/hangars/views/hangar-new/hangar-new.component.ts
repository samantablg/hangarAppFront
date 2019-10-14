import { Router } from '@angular/router';
import { HangarService } from 'src/app/core/services/hangar.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hangar-new',
  templateUrl: './hangar-new.component.html',
  styleUrls: ['./hangar-new.component.css']
})
export class HangarNewComponent implements OnInit {

  @HostBinding('class.new-hangar') @Input()
  newHangar = false;

  constructor(private hangarService: HangarService, private router: Router) { }

  ngOnInit() {
  }

  postHangar(hangar: HangarModel) {
    this.hangarService.postHangar(hangar)
    .subscribe( data => {
      window.alert('hangar save');
      this.router.navigate(['hangars']);
    }, err => {
      window.alert('error');
    });
  }

}

