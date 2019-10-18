import { Component, OnInit, AfterViewInit } from '@angular/core';
import data from '../../../assets/game-levels/memory-game/memory.levels.json';
import { MemoryGameService } from 'src/app/services/memory-game.service.js';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit, AfterViewInit {


  levelCards = [];

  constructor(public mgs: MemoryGameService) {
  }

  ngOnInit() {
    this.levelCards = this.mgs.loadLevel(1);
  }

  ngAfterViewInit(): void {

  }

  public loadNewLevel() {
    console.log("Load new level");
  }

}
