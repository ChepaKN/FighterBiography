import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FightEvent} from "../fight-event";
import {DateValidator} from "../../validators/date-validator";

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
  styleUrls: ['./fighter-form.component.css']
})
export class FighterFormComponent implements OnInit {

  fighterForm: FormGroup;
  @Output()
  addFight: EventEmitter<FightEvent> = new EventEmitter<FightEvent>();

  dateValidator = new DateValidator();

  constructor() {
    this.fighterForm = new FormGroup({
      fightDate: new FormControl('', [Validators.required, this.dateValidator.validateDate]),
      opponent: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    })
  }

  ngOnInit(): void {
  }

  addFightEvent(): void{

    if(this.fighterForm.invalid){
      console.log(this.fighterForm.get('eventDate').getError('invalidDate'))
      return
    }

    const value = this.fighterForm.value;
    const fightEvent = new FightEvent(new Date(value.fightDate), value.opponent);
    this.addFight.emit(fightEvent);

    this.fighterForm.reset({
      fightDate: '',
      opponent: ''
    })
  }

}
