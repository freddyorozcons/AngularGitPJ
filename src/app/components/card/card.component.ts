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
      this.mgs.setActualValue(this.cardContent);
      this.mgs.increaseCardCtrl();
      this.mgs.addClickedElement(element);
    } else {
      this.mgs.setActualValue('');
      this.mgs.decreaseCardCtrl();
    }
    this.showCard = !this.showCard;


    console.log(this.mgs);
  }

  closeCard(): void {
    this.showCard = false;
  }

  disableCard(): void {
    this.isActive = false;
  }
}
