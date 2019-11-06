import { ProductFacade } from './../../../store/facade/product.facade';
import { HangarFacade } from 'src/app/store/facade/hangar.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  hangarsResult$: Observable<HangarModel[]> = this.hangarFacade.hangarsResult$;
  productsResult$: Observable<ProductModel[]> = this.productFacade.productsResult$;

  constructor(private hangarFacade: HangarFacade,
              private productFacade: ProductFacade) { }

  ngOnInit() { }

}
