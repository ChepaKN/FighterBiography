import {Component, Input, OnInit} from '@angular/core';
import {DomenStage} from "../domenClasses/domen-stage";
import {DomenEvent} from "../domenClasses/domen-event";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input()
  stage: DomenStage;
  events: DomenEvent[] = [];

  eventDate: string = '';
  eventTitle: string = '';
  eventLocation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  createEvent() {
    if(this.eventDate == '' || this.eventTitle == '' || this.eventLocation == ''){
      alert('Пожалуйста, заполните форму')
      return;
    }

    //todo: need checking -> new Date(this.eventDate). Can be present wrong arguments

    this.events.push(new DomenEvent(new Date(this.eventDate), this.eventTitle, this.eventLocation));
    this.eventTitle = '';
    this.eventLocation = '';
    this.eventDate = '';
  }

}
