import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Output() loadData = new EventEmitter();

  text: string;
  click = 0;

  /* type = ['hangar-name', 'product-name'];

  formSearch: FormGroup = new FormGroup({
    search: new FormControl(''),
    type: new FormControl('')
  }); */

  constructor() {}

  ngOnInit() {}

  firstClick() {
    this.click += 1;
    if (this.click === 1) {
      this.loadData.emit();
    }
  }

  /* searchHangar() {
    if (this.formSearch.value.search !== '') {
      this.router.navigate(['hangars/search', this.formSearch.value.search]);
    }
  }

  searchProduct() {
    if (this.formSearch.value.search !== '') {
      this.router.navigate(['products/search', this.formSearch.value.search]);
    }
  }

  searchApp() {
    if (this.formSearch.value.type === 'product-name') {
      return this.searchProduct();
    } else if (this.formSearch.value.type === 'hangar-name') {
      return this.searchHangar();
    }
  } */
}
