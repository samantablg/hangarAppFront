import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() totalPrice: number;
  @Input() totalProducts: number;
  constructor() { }

  ngOnInit() {
  }

}
