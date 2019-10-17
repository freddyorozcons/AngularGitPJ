import { Component, OnInit } from '@angular/core';
import data from '../../../assets/game-levels/memory-game/memory.levels.json';
import { MemoryGameService } from 'src/app/services/memory-game.service.js';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {

  levelCards = [];

  constructor(public mgs: MemoryGameService) {
  }

  ngOnInit() {
    this.levelCards = this.mgs.loadLevel(0);
  }

  public loadNewLevel() {
    console.log("Load new level");
  }

}
