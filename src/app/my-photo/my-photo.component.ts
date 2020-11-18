import {Component, OnDestroy, OnInit} from '@angular/core';
import {FightEvent} from './fight-event';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhotoComponent implements OnInit, OnDestroy {

  name: string;
  nickname: string;
  birthDate: Date;
  photoSrc: string;
  secondsSinceOpen = 0;
  timeBeforeFight = 0;
  timerId: number;
  fightTimerId: number;

  opponent = '';
  fightDate = '';
  fightEvent: FightEvent;
  fightEventsList: FightEvent[] = [];

  savedRecordsCounter = 0;

  constructor() {
    this.name = 'Алистар Оверим';
    this.nickname = "The Demolition Man";
    this.birthDate = new Date(1992, 1, 3);
    this.photoSrc = 'assets/img/overeem.jpg';
    this.savedRecordsCounter = localStorage.length;
  }

  ngOnInit(): void {
    this.loadFromLocalStorage();
    // this.timerId = setInterval(() => this.secondsSinceOpen++, 1000);
    // this.fightTimerId = setInterval(this.getTimeBeforeFight, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
    clearInterval(this.fightTimerId);
  }

  // getTimeBeforeFight = () => this.timeBeforeFight = this.fightEvent.fightDate.getTime() - new Date().getTime();

  saveLocalStorage(event : FightEvent): void{
    localStorage.setItem(this.savedRecordsCounter.toString(), JSON.stringify(event));
    this.savedRecordsCounter++;
  }

  loadFromLocalStorage(): void{
    for(let i = 0; i < localStorage.length; i++){
      this.fightEvent = JSON.parse(localStorage.getItem(i.toString()));
      this.fightEventsList.push(this.fightEvent);
    }
  }

  addFightEvent(): void{

    if(this.fightDate == '' || this.opponent == '') return;

    this.fightEvent = new FightEvent(this.fightDate, this.opponent);
    this.fightEventsList.push(this.fightEvent);
    this.fightDate = '';
    this.opponent = '';
    this.saveLocalStorage(this.fightEvent);
  }

  clearEvents(): void{
    this.fightEventsList = [];
    localStorage.clear();
  }
}
