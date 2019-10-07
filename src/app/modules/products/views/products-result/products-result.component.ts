import { ProductService } from './../../../../core/services/product.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-result',
  templateUrl: './products-result.component.html',
  styleUrls: ['./products-result.component.css']
})
export class ProductsResultComponent implements OnInit {

  products: ProductModel[] = [];
  product: ProductModel;
  isProducts: boolean;

  constructor(private route: ActivatedRoute , private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.route.params
    .subscribe( data => {
      if (data) {
        this.productService.findProductsByName(data.name)
        .subscribe( resp => {
          this.products = resp;
          this.isProducts = (this.products.length > 0);
        });
      }
  });
  }

  getProduct( product: ProductModel ) {
    this.router.navigate(['products/product', product.id]);
  }

}
