import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'AngularGitPJ';
  myAge : number;

  ngOnInit(){
    this.myAge = 23;
  }
}
