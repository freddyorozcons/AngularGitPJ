import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardContent: string;
  @Input() cardTitle: string;
  public showCard: boolean = false;
  private isActive: boolean;

  @Output() cardContentMsg = new EventEmitter<string>();

  constructor(public mgs: MemoryGameService) {
    this.isActive = true;
  }

  ngOnInit() {
  }

  clickCard(element): void {
    if (!this.showCard) {
      //Show Card
      this.mgs.setActualValue(this.cardContent, element);
    } else {
      //Hide card
      this.mgs.setActualValue('', element);
    }

    this.showCard = !this.showCard;
    //console.log(this.mgs);
  }

  closeCard(): void {
    console.log("somebody close me");

    this.showCard = false;
  }

  disableCard(): void {
    this.isActive = false;
  }
}
