import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-phrase',
  templateUrl: './card-phrase.component.html',
  styleUrls: ['./card-phrase.component.scss']
})
export class CardPhraseComponent implements OnInit {

  phraseToShow: string;
  @Input() phraseAutor: string;

  constructor() { }

  ngOnInit() {
    this.phraseToShow = "You could not live with your own failure. And where did that bring you? Back to me."
  }

}
