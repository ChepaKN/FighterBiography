import {Component, Input, OnInit} from '@angular/core';
import {DomenEvent} from "../domenClasses/domen-event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event: DomenEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
