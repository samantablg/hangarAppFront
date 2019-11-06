import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card: any;
  @Output() redirectTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.redirectTo.emit(this.card.url);
  }

}
