import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  private _storedValue;
  private _actualValue;
  private _showCardCtrl;
  private _temporalCards;

  constructor() {
    this._storedValue = '';
    this._actualValue = '';
    this._showCardCtrl = 0;
    this._temporalCards = [];
  }

  public setActualValue(value?): void {
    if (this._showCardCtrl < 2) {
      if (this._actualValue == '') {
        this._actualValue = value;
      } else {
        this._storedValue = this._actualValue;
        this._actualValue = value;
      }

      if (value == '') {
        this._actualValue = '';
      }
    } else {
      this._showCardCtrl = 0;
      this._temporalCards.forEach(element => element.closeCard());
    }
  }

  private validateFirstCard() { }
  private validateSecondCard() {
    if (this._actualValue == this._storedValue) {
      this._temporalCards.forEach(element => element.disableCard());
    }
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
    this._temporalCards.push(clickedCard);
  }
}
