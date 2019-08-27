import { ProductModel } from './../../../core/models/product.interface';
import { CommunicationService } from './../../../core/services/communication.service';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { HangarService } from './../../../core/services/hangar.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formSearch: FormGroup;
  result: HangarModel[] | ProductModel[] = [];
  type = ['hangar-name', 'product-name'];

  constructor(
    private router: Router,
    private hangarService: HangarService,
    private productService: ProductService,
    private comService: CommunicationService
  ) {
    this.formSearch = new FormGroup({
      search: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit() {}

  searchHangar() {
    if (this.formSearch.value.search !== '') {
      this.hangarService
        .findHangarsByName(this.formSearch.value.search)
        .subscribe(
          data => {
            this.result = data;
            this.comService.setData(this.result);
            this.router.navigate(['hangars/search']);
          },
          error => {
            this.comService.setData('');
            window.alert('Sin resultado de búsqueda');
          }
        );
    }
  }

  searchProduct() {
    if (this.formSearch.value.search !== '') {
      this.productService
        .findProductsByName(this.formSearch.value.search)
        .subscribe(
          data => {
            this.result = data;
            this.comService.setData(this.result);
            this.router.navigate(['products/search']);
          },
          error => {
            this.comService.setData('');
            window.alert('Sin resultado de búsqueda');
          }
        );
    }
  }

  searchApp() {
    if (this.formSearch.value.type === 'product-name') {
      return this.searchProduct();
    } else if (this.formSearch.value.type === 'hangar-name') {
      return this.searchHangar();
    }
  }
}
