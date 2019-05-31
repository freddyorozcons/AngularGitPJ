import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularGitPJ';
  myAge : number;

  ngOnInit(){
    this.myAge = 23;
  }
}
