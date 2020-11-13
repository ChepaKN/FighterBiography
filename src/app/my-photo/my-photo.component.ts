import {Component, OnDestroy, OnInit} from '@angular/core';
import {FightEvent} from './fight-event';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhotoComponent implements OnInit, OnDestroy {

  name: string;
  birthDate: Date;
  photoSrc: string;
  secondsSinceOpen = 0;
  timeBeforeFight = 0;
  timerId: number;
  fightTimerId: number;

  opponent: string;
  fightDate: string;
  fightEvent: FightEvent;
  fightEventsList: FightEvent[] = [];


  constructor() {
    this.name = 'Алистар "The Demolition Man" Оверим';
    this.birthDate = new Date(1992, 1, 3);
    this.photoSrc = 'assets/img/overeem.jpg';
  }

  ngOnInit(): void {
    // this.timerId = setInterval(() => this.secondsSinceOpen++, 1000);
    // this.fightTimerId = setInterval(this.getTimeBeforeFight, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
    clearInterval(this.fightTimerId);
  }

  // getTimeBeforeFight = () => this.timeBeforeFight = this.fightEvent.fightDate.getTime() - new Date().getTime();

  saveLocalStorage(event : FightEvent): void{
    localStorage.setItem(event.fightDate, JSON.stringify(event))
  }

  addFightEvent(): void{
    this.fightEvent = new FightEvent(this.fightDate, this.opponent);
    this.fightEventsList.push(this.fightEvent);
    this.fightDate = '';
    this.opponent = '';
    this.saveLocalStorage(this.fightEvent);
  }

  clearEvents(): void{
    this.fightEventsList = [];
  }
}
