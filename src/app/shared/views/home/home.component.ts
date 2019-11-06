import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hangarCard: any;
  public productCard: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.hangarCard = {
      title: 'hangar-name',
      url: 'hangars',
      img: '../../../../assets/img/hangars.png'
    };

    this.productCard = {
      title: 'product-name',
      url: 'products',
      img: '../../../../assets/img/products.png'
    };
  }

  redirectTo(url: string) {
    this.router.navigate(['', url]);
  }

}
