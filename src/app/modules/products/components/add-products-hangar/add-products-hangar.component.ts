import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductOfHangarModel } from 'src/app/core/models/product-hangar.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './../../../../core/services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Router } from '@angular/router';
import { ProductOfHangarService } from 'src/app/core/services/product-of-hangar.service';

@Component({
  selector: 'app-add-products-hangar',
  templateUrl: './add-products-hangar.component.html',
  styleUrls: ['./add-products-hangar.component.css']
})
export class AddProductsHangarComponent implements OnInit {

  @Input() isProductInsert: boolean;
  @Input() isAmountModify: boolean;
  @Input() hangar: BasicHangarModel;
  @Input() idProduct: number;
  products: ProductModel[] = [];
  productToHangar: ProductOfHangarModel;
  formProductToHangar: FormGroup;


  constructor(private productService: ProductService,
              private productOfHangarService: ProductOfHangarService,
              private comService: CommunicationService,
              private router: Router) {
    this.hangar = this.comService.getDataRelativeToHangar();
    if (this.hangar === undefined) {
      this.router.navigate(['products']);
    }
  }

  ngOnInit() {
    this.formProductToHangar = new FormGroup({
      hangar: new FormControl(this.hangar.id),
      product: new FormControl(this.idProduct, [
        Validators.required
      ]),
      amount: new FormControl('', [
        Validators.required
      ])
    });

    this.productService.loadProductsNotAssociateToHangarById(this.hangar.id).subscribe( data => {
      this.products = data;
      console.log(this.products);
    }, err => {
      this.productService.loadProducts().subscribe( data => {
        this.products = data;
      });
    });

    if (this.isAmountModify) {
      this.product.setValue(this.idProduct),
      this.amount.setValue(this.amount);
    }
  }

  get product() {
    return this.formProductToHangar.get('product');
  }

  get amount() {
    return this.formProductToHangar.get('amount');
  }

  addProduct() {
    if (this.isAmountModify) {
      this.product.setValue(this.idProduct);
      this.productOfHangarService.updateAmountOfRelationShip(this.formProductToHangar.value)
      .subscribe( data => {
        this.isAmountModify = !this.isAmountModify;
        window.alert('update');
        this.router.navigate(['products']);
      }, err => {
        window.alert('error');
      });
    } else {
      this.productOfHangarService.postProductToHangar(this.formProductToHangar.value)
      .subscribe( data => {
        this.isProductInsert = !this.isProductInsert;
        window.alert('save!');
        this.router.navigate(['products']);
      }, err => {
        window.alert('alert');
      });
    }
  }

}
