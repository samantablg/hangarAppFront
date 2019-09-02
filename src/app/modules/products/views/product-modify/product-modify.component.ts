import { CommunicationService } from './../../../../core/services/communication.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  product: ProductModel;

  constructor(private comService: CommunicationService) { }

  ngOnInit() {
    this.product = this.comService.getDataRelativeToProduct();
  }

}
