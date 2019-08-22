import { CommunicationService } from './../../../core/services/communication.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { HangarService } from './../../../core/services/hangar.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSearch: FormGroup;
  result: HangarModel[] = [];

  constructor(private router: Router, private hangarService: HangarService, private comService: CommunicationService) {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
   }

  ngOnInit() {}

  searchHangar() {
    if (this.formSearch.value.search !== '') {
      this.hangarService.findHangarsByName(this.formSearch.value.search).subscribe( data  => {
        this.result = data;
        this.comService.setData(this.result);
        this.router.navigate(['hangars/search']);
      },
      (error) => {
        this.comService.setData('');
        this.router.navigate(['hangars/search']);
      });
    }
  }
}
