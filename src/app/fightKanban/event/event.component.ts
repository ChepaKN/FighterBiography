import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomenEvent} from "../domenClasses/domen-event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event: DomenEvent;

  @Output()
  moveEvent: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

  @Output()
  deleteEventBoard: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  moveAhead() {
    this.moveEvent.emit(this.event);
  }

  deleteEvent() {
    this.deleteEventBoard.emit(this.event);
  }
}
