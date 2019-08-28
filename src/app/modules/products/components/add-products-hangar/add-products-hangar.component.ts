import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './../../../../core/services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products-hangar',
  templateUrl: './add-products-hangar.component.html',
  styleUrls: ['./add-products-hangar.component.css']
})
export class AddProductsHangarComponent implements OnInit {

  @Input() insertProduct: boolean;
  @Input() hangar: any;
  idHangar: number;
  products: ProductModel[] = [];
  productToHangar: ProductOfHangarModel;
  formProductToHangar: FormGroup;


  constructor( private productService: ProductService,
               private comService: CommunicationService,
               private router: Router) {
    this.hangar = this.comService.getData();
    if (this.hangar === undefined) {
      this.router.navigate(['']);
    }
    this.formProductToHangar = new FormGroup({
      hangar: new FormControl(this.hangar[0]),
      product: new FormControl('', [
        Validators.required
      ]),
      amount: new FormControl('', [
        Validators.required
      ])
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
    console.log(this.formProductToHangar.value);
    this.productService.postProductToHangar(this.formProductToHangar.value);
    this.insertProduct = false;
    window.alert('save!');
    this.router.navigate(['products']);
  }

}
