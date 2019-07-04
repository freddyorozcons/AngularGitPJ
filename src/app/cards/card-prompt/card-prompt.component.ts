import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-prompt',
  templateUrl: './card-prompt.component.html',
  styleUrls: ['./card-prompt.component.scss']
})
export class CardPromptComponent implements OnInit {

  promptTextToShow: string;
  message: string = "Hola bebé";

  @Output() acceptSendMsg;
  @Output() denySendMsg;
  acceptMsg: string;
  denyMsg: string;

  constructor() { }

  ngOnInit() {
    this.promptTextToShow = "Is Thanos ok?"
    this.acceptSendMsg = new EventEmitter<string>();
    this.denySendMsg = new EventEmitter<string>();

    this.acceptMsg = "Snap Fingers!";
    this.denyMsg = "Do not Snap!";
  }

  acceptBtn() {
    console.log("Prompt sends: " + this.acceptMsg);
    this.acceptSendMsg.emit(this.acceptMsg);
  }
  denyBtn() {
    console.log("Prompt sends: " + this.denyMsg);
    this.denySendMsg.emit(this.denyMsg);
  }

}
