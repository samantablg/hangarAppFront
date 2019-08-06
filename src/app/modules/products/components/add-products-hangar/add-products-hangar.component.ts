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

  formProductToHangar = new FormGroup({
    hangar: new FormControl(''),
    product: new FormControl(''),
    amount: new FormControl('')
  });

  @Input() insertProduct: boolean;
  // formProductToHangar: FormGroup;
  products: ProductModel[] = [];

  constructor( private productService: ProductService, private productToHangarService: ProductToHangarService ) {
  }

  ngOnInit() {
    this.productService.loadProducts().subscribe( data => {
      this.products = data;
    });
  }

  addProduct() {
    console.log('save');
  }



}
