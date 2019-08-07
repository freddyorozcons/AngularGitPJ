import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-game-holder',
  templateUrl: './main-game-holder.component.html',
  styleUrls: ['./main-game-holder.component.scss']
})
export class MainGameHolderComponent implements OnInit {

  @Input() useStatusBar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
