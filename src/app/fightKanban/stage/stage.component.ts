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

  @Output()
  moveEvent: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

  // eventDate: string = '';
  // eventTitle: string = '';
  // eventLocation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(event:  DomenEvent) {
    // if(this.eventDate == '' || this.eventTitle == '' || this.eventLocation == ''){
    //   alert('Пожалуйста, заполните форму')
    //   return;
    // }
    //
    // let date = new Date(this.eventDate);
    // if(isNaN(date.valueOf())){
    //   alert('Пожалуйста, заполните дату корректно')
    //   return;
    // }
    this.stage.events.push(event);
    // this.eventTitle = '';
    // this.eventLocation = '';
    // this.eventDate = '';
  }

  onEventMoved($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
    this.moveEvent.emit($event);
  }

  onEventDeleted($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
  }
}
