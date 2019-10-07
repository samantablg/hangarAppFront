import { ProductService } from './../../../../core/services/product.service';
import { ProductOfHangarService } from 'src/app/core/services/product-of-hangar.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel;
  insertPrice = false;
  showHistoric = false;
  id: number;

  constructor(private router: Router,
              private productOfHangarService: ProductOfHangarService,
              private route: ActivatedRoute,
              private productService: ProductService
    ) {
      console.log(this.product);
     }

  ngOnInit() {

    this.route.params.subscribe(
      data => {
        this.id = data.id;
      }
    );
    this.productService.loadProductById(this.id)
    .subscribe( data => {
      this.product = data;
    });
  }

  public addPrice() {
    this.insertPrice = !this.insertPrice;
  }

  public getPrices() {
    this.showHistoric = !this.showHistoric;
  }

  public editProduct() {
    this.router.navigate(['/products/modify', this.product.id]);
  }

  public deleteProduct() {
    this.productOfHangarService.isProductLinkToHangar(this.product.id).subscribe( data => {
      if (data) {
        window.alert(`product can't be deleted`);
      } else {
        this.productService.deleteProduct(this.product.id)
        .subscribe( response => {
          window.alert('product deleted');
          this.router.navigate(['/products']);
        });
      }
    }, err => {
      window.alert('fail');
    });
  }

}
