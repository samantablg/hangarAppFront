import { HangarService } from 'src/app/core/services/hangar.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hangars-result',
  templateUrl: './hangars-result.component.html',
  styleUrls: ['./hangars-result.component.css']
})
export class HangarsResultComponent implements OnInit {

  hangars: HangarModel[] = [];
  hangar: HangarModel;
  isHangars: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private hangarService: HangarService) {}

  ngOnInit() {
    this.route.params
    .subscribe( data => {
      if (data) {
        this.hangarService
        .findHangarsByName(data.name)
        .subscribe( resp => {
          this.hangars = resp;
          this.isHangars = (this.hangars.length > 0);
        });
      }
  });
}

getHangar( hangar: HangarModel ) {
  this.router.navigate(['/hangars/hangar', hangar.id]);
}

}
