import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardContent: string;
  @Input() cardTitle: string;
  public showCard: boolean = false;

  @Output() cardContentMsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickCard(event) {
    console.log(event);
    this.showCard = !this.showCard;
  }
}
