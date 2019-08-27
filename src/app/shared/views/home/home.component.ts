import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hangarCard: any;
  public productCard: any;

  constructor() { }

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

}
