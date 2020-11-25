import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPhotoComponent } from './my-photo/my-photo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { BoardComponent } from './fightKanban/board/board.component';
import { StageComponent } from './fightKanban/stage/stage.component';
import { EventComponent } from './fightKanban/event/event.component';
import { EventFormComponent } from './fightKanban/event-form/event-form.component';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPhotoComponent,
    CalculatorComponent,
    BoardComponent,
    StageComponent,
    EventComponent,
    EventFormComponent,
    FormErrorComponent,
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
