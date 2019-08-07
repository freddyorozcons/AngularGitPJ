import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { MemoryGameComponent } from './pages/memory-game/memory-game.component';
import { MainGameHolderComponent } from './components/main-game-holder/main-game-holder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    StatusBarComponent,
    MemoryGameComponent,
    MainGameHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
