import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPhotoComponent } from './my-photo/my-photo.component';
import {FormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { BoardComponent } from './fightKanban/board/board.component';
import { StageComponent } from './fightKanban/stage/stage.component';
import { EventComponent } from './fightKanban/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPhotoComponent,
    CalculatorComponent,
    BoardComponent,
    StageComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
