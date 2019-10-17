import { Injectable } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import data from '../../assets/game-levels/memory-game/memory.levels.json';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  private _slot1: CardComponent;
  private _slot2: CardComponent;
  private _clickControl: boolean;
  private levelCards = [];

  constructor() {
    this._slot1 = null;
    this._slot2 = null;
    this._clickControl = true;
  }

  public loadLevel(level) {
    let doubleLength = data.GameInfo[level].cards.length * 2;
    let forCtrl = 0;

    for (let i = 0; i < doubleLength; i++) {
      if (forCtrl < doubleLength / 2) {
        this.levelCards.push(data.GameInfo[level].cards[forCtrl].item);
        forCtrl++;
      } else {
        forCtrl = 0;
        this.levelCards.push(data.GameInfo[level].cards[forCtrl].item);
        forCtrl++;
      }
    }
    this.shuffle(this.levelCards);

    return this.levelCards;
  }

  shuffle(array): void {
    array.sort(() => Math.random() - 0.5);
  }

  public setActualValue(clickedCard: CardComponent): void {
    if (this._clickControl) {
      if (clickedCard.isActive) {
        if (this._slot1 == null) {
          this._slot1 = clickedCard;
          this._slot1.showHideCard();
        } else if (this._slot1 == clickedCard) {
          this._slot1 = null;
          this._slot1.showHideCard();
        } else if (this._slot1 != clickedCard) {
          this._slot2 = clickedCard;
          this._slot2.showHideCard();
          this.validateCards();
        }
      }
    }
  }

  private validateCards(): void {
    if (this._slot1.cardContent[0] == this._slot2.cardContent[0]) {
      this._slot1.disableCard();
      this._slot2.disableCard();
      this._slot1 = null;
      this._slot2 = null;
    } else {
      this._clickControl = false;
      setTimeout(() => {
        this._slot1.closeCard();
        this._slot2.closeCard();
        this._slot1 = null;
        this._slot2 = null;
        this._clickControl = true;
      }, 1000);
    }
  }

  private finishGame(): void {
    console.log("Finished");
  }
}
