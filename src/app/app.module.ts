import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardHolderComponent } from './cards/card-holder/card-holder.component';
import { CardPhraseComponent } from './cards/card-phrase/card-phrase.component';
import { CardPromptComponent } from './cards/card-prompt/card-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CardHolderComponent,
    CardPhraseComponent,
    CardPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
