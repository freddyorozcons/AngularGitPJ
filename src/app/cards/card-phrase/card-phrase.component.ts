import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card-phrase',
  templateUrl: './card-phrase.component.html',
  styleUrls: ['./card-phrase.component.scss']
})
export class CardPhraseComponent implements OnInit, AfterContentInit {


  phraseToShow: string;
  @Input() phraseAutor: string;
  @Input() quoteDay: number;
  @Input() quotePhrase: string;

  constructor() { }

  ngOnInit() {
    this.phraseToShow = "You could not live with your own failure. And where did that bring you? Back to me.";
  }

  ngAfterContentInit(): void {
    if (this.quotePhrase != null) {
      this.phraseToShow = this.quotePhrase;
    }
  }

}
