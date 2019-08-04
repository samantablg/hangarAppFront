import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent {

  @Input() product: ProductModel;

  constructor(private router: Router) { 
    this.product = this.router.getCurrentNavigation().extras.state.data;;
  }


}
