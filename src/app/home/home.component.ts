import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mcuQuotes = [
    {
      author: 'Thanos',
      phrase: "You could not live with your own failure. And where did that bring you? Back to me."
    },
    {
      author: 'Stan Lee',
      phrase: "Excelsior"
    },
  ];

  ngOnInit() {

  }

  receiveMessage($event: any) {
    console.log("Home receives" + $event);
  }
}
