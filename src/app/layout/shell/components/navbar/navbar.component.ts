import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() username: string;
  @Input() isAuthenticated: boolean;
  @Input() productsOfOrder: number;
  @Output() emitChangeLang = new EventEmitter();
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
