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
      title: 'Hangars',
      url: 'hangars',
      img: '../../../../assets/hangars.png'
    };

    this.productCard = {
      title: 'Products',
      url: 'products',
      img: '../../../../assets/products.png'
    };
  }

}
