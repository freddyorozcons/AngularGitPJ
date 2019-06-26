import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prompt',
  templateUrl: './card-prompt.component.html',
  styleUrls: ['./card-prompt.component.scss']
})
export class CardPromptComponent implements OnInit {

  promptTextToShow: string;

  constructor() { }

  ngOnInit() {
    this.promptTextToShow = "Is Thanos ok?"
  }

}
