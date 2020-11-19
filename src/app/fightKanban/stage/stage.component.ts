import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  // events: DomenEvent[] = [];

  @Output()
  moveEvent: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

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

    let date = new Date(this.eventDate);
    if(isNaN(date.valueOf())){
      alert('Пожалуйста, заполните дату корректно')
      return;
    }
    this.stage.events.push(new DomenEvent(date, this.eventTitle, this.eventLocation));
    this.eventTitle = '';
    this.eventLocation = '';
    this.eventDate = '';
  }

  onEventMoved($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
    this.moveEvent.emit($event);
  }

  onEventDeleted($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
  }
}
