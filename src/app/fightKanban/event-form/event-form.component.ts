import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DomenEvent} from "../domenClasses/domen-event";
import {DateValidator} from "../../validators/date-validator";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Output()
  create: EventEmitter<DomenEvent> = new EventEmitter<DomenEvent>();

  eventForm: FormGroup;
  dateValidator = new DateValidator();

  constructor() {
    this.eventForm = new FormGroup({
      eventDate: new FormControl('', [Validators.required, this.dateValidator.validateDate]),
      eventTitle: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      eventLocation: new FormControl('',[Validators.required, Validators.maxLength(15)])
    })
  }

  ngOnInit(): void {
  }

  createEvent(){
    const value = this.eventForm.value;

    if(this.eventForm.invalid){
      console.log(this.eventForm.get('eventDate').getError('invalidDate'))
      return
    }

    const event = new DomenEvent(new Date(value.eventDate), value.eventTitle, value.eventLocation);
    this.create.emit(event);

    this.eventForm.reset(
      {
        eventDate: '',
        eventTitle: '',
        eventLocation: ''
      }
    )
  }

}
