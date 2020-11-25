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

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(event:  DomenEvent) {
    this.stage.events.push(event);
  }

  onEventMoved($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
    this.moveEvent.emit($event);
  }

  onEventDeleted($event: DomenEvent) {
    this.stage.events = this.stage.events.filter(value => value != $event);
  }
}
