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
    console.log(data.GameInfo[0].cards);
    this.loadLevel(0);
  }

  ngOnInit() {

  }

  loadLevel(level) {
    this.levelCards = data.GameInfo[level].cards
    console.log(this.levelCards[0]);
  }

}
