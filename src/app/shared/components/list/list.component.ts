import { Component, OnInit, Input } from '@angular/core';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() result: HangarModel[] | ProductModel[];
  @Input() isHangar: boolean;

  constructor(private router: Router) { }

  ngOnInit() {}

  viewDetails(id: number) {
    if (this.isHangar) {
      this.router.navigate(['hangars', id]);
    } else {
      this.router.navigate(['products', id]);
    }
  }

}
