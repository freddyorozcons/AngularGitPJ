import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  private _storedValue;
  private _actualValue;
  private _showCardCtrl;
  private _temporalCards;
  private _lastPressedCard;

  constructor() {
    this._storedValue = '';
    this._actualValue = '';
    this._showCardCtrl = 0;
    this._temporalCards = [];
    this._lastPressedCard = null;
  }

  public setActualValue(value, clickedCard): void {
    if (this._actualValue == '') {
      this._actualValue = value;
      this.decreaseCardCtrl();
    } else {
      this._storedValue = this._actualValue;
      this._actualValue = value;
      this.increaseCardCtrl();
    }

    this.addClickedElement(clickedCard);

    if (this._showCardCtrl == 0 || this._showCardCtrl == 1) {
      this.validateFirstCard();
    } else {
      this.validateSecondCard();
    }
  }

  private validateFirstCard() {

  }
  private validateSecondCard() {
    if (this._actualValue == this._storedValue) {
      this._temporalCards.forEach(element => element.disableCard());
    }
    this._temporalCards.forEach(element => element.closeCard());
    this._temporalCards = [];
  }

  public increaseCardCtrl() {
    this._showCardCtrl++;
  }

  public decreaseCardCtrl() {
    if (this._showCardCtrl > 0) {
      this._showCardCtrl--;
    } else {
      this._showCardCtrl = 0;
    }
  }

  public addClickedElement(clickedCard) {
    if (this._lastPressedCard != clickedCard) {
      this._lastPressedCard = clickedCard;
      this._temporalCards.push(clickedCard);
    } else {
    }
  }
}
