import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FighterComponent } from './fighter/fighter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BoardComponent } from './fightKanban/board/board.component';
import { StageComponent } from './fightKanban/stage/stage.component';
import { EventComponent } from './fightKanban/event/event.component';
import { EventFormComponent } from './fightKanban/event-form/event-form.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { FighterFormComponent } from './fighter/fighter-form/fighter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterComponent,
    BoardComponent,
    StageComponent,
    EventComponent,
    EventFormComponent,
    FormErrorComponent,
    FighterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
