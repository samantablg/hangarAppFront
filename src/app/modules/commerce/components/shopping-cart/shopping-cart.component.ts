import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderModel } from 'src/app/core/models/order.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() totalPrice: number;
  @Input() totalProducts: number;
  @Input() order: OrderModel;
  @Output() sendOrder = new EventEmitter<OrderModel>();
  constructor() {}

  ngOnInit() { }

}
