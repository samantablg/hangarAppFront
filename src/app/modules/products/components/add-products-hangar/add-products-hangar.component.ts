import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductToHangarService } from './../../../../core/services/product-hangar.service';
import { ProductService } from './../../../../core/services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-add-products-hangar',
  templateUrl: './add-products-hangar.component.html',
  styleUrls: ['./add-products-hangar.component.css']
})
export class AddProductsHangarComponent implements OnInit {

  @Input() insertProduct: boolean;
  idHangar: number;
  products: ProductModel[] = [];
  productToHangar: ProductOfHangarModel;
  formProductToHangar: FormGroup;


  constructor( private productService: ProductService, private comService: CommunicationService ) {
    // this.hangarSelect = this.comService.getData();
    this.formProductToHangar = new FormGroup({
      hangar: new FormControl(''),
      product: new FormControl(''),
      amount: new FormControl('')
    });
  }

  ngOnInit() {
    this.productService.loadProducts().subscribe( data => {
      this.products = data;
    });


  }

  get product() {
    return this.formProductToHangar.get('hangar');
  }

  get amount() {
    return this.formProductToHangar.get('amount');
  }


  addProduct() {
    console.log('save');
  }



}
