import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DomenEvent} from "../domenClasses/domen-event";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Output()
  create: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

  eventForm: FormGroup;

  constructor() {
    this.eventForm = new FormGroup({
      eventDate: new FormControl(''),
      eventTitle: new FormControl(''),
      eventLocation: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  createEvent(){
    const value = this.eventForm.value;

    if(value.eventDate == '' || value.eventTitle == '' || value.eventLocation == ''){
      alert('Пожалуйста, заполните форму')
      return;
    }

    let date = new Date(value.eventDate);
    if(isNaN(date.valueOf())){
      alert('Пожалуйста, заполните дату корректно')
      return;
    }

    const event = new DomenEvent(date, value.eventTitle, value.eventLocation);
    this.create.emit(event);
  }

}
