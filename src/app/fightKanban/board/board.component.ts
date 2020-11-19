import { Component, OnInit } from '@angular/core';
import {Stages} from "../domenClasses/domen-stage";
import {DomenEvent} from "../domenClasses/domen-event";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  stages = Stages;

  constructor() { }
  ngOnInit(): void {
  }

  onEventMoved($event: DomenEvent, i: number) {
    if(this.stages.length > i + 1){
      this.stages[i + 1].events.push($event);
    }
  }
}
