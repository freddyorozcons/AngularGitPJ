import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  public gamePoints: number = 0;
  public playerName: string = "Anonymous";

  constructor() { }

  ngOnInit() {
  }

}
