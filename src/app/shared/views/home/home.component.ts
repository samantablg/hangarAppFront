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
      title: 'Hangar',
      url: 'hangars',
      img: '../../../../assets/img/hangars.png'
    };

    this.productCard = {
      title: 'Product',
      url: 'products',
      img: '../../../../assets/img/products.png'
    };
  }

}
