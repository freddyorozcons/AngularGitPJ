import { Component, OnInit } from '@angular/core';
import data from '../../../assets/game-levels/memory-game/memory.levels.json';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {

  level: number = 0;
  levelCards = [];

  constructor() {
    this.loadLevel(0);
  }

  ngOnInit() {

  }

  loadLevel(level) {
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
  }

  shuffle(array): void {
    array.sort(() => Math.random() - 0.5);
  }

}
