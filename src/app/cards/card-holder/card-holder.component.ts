import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { CardPromptComponent } from '../card-prompt/card-prompt.component';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit, AfterContentInit {

  parentMessage = "message from parent";

  // Create a variable to see the child at content
  @ContentChild(CardPromptComponent, { static: true }) childCard;
  //A var to hold the child var
  private msgFromChild: string;
  //A var to show
  msgToDisplay: string = null;

  constructor() { }

  ngOnInit() {
    // Empty
  }

  ngAfterContentInit(): void {
    if (this.childCard != null || this.childCard != undefined) {
      this.msgFromChild = this.childCard.message;
    }
    if (this.msgToDisplay == null && this.msgFromChild != undefined || this.msgFromChild != null) {
      this.msgToDisplay = this.msgFromChild;
    } else {
      this.msgToDisplay = "No child found";
    }
  }
}
