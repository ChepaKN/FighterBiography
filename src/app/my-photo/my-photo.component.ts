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
  timeBeforeFight = 0;
  nextFightTimerId: number;

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
  }

  ngOnInit(): void {
    this.savedRecordsCounter = localStorage.length;
    this.loadFromLocalStorage();
    this.nextFightTimerId = setInterval(this.nextFightCountdown, 1000);
  }

  nextFightCountdown = () => {
    if(this.fightEventsList.length){
      this.timeBeforeFight = this.fightEventsList[0].fightDate.valueOf() - new Date().valueOf();
    }else{
      this.timeBeforeFight = 0;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.nextFightTimerId);
  }

  sortEventList(): void{
    this.fightEventsList = this.fightEventsList.filter(value => value.fightDate.valueOf() > new Date().valueOf());
    this.fightEventsList.sort((a, b) => a.fightDate.valueOf() - b.fightDate.valueOf());
  }

  saveLocalStorage(event : FightEvent): void{
    localStorage.setItem(this.savedRecordsCounter.toString(), JSON.stringify(event));
    this.sortEventList();
    this.savedRecordsCounter++;
  }

  loadFromLocalStorage(): void{
    let fromJson, opponentName, fightDate;
    for(let i = 0; i < localStorage.length; i++){
      fromJson = JSON.parse(localStorage.getItem(i.toString()));
      opponentName = fromJson.opponentName;
      fightDate = fromJson.fightDate;
      this.fightEventsList.push(new FightEvent(new Date(fightDate), opponentName));
    }
    this.sortEventList();
  }

  addFightEvent(): void{

    if(this.fightDate == '' || this.opponent == '') {
      alert('Заполните поля')
      return;
    }

    let date = new Date(this.fightDate);
    if(isNaN(date.valueOf()) || (date.valueOf() < new Date().valueOf())){
      alert('Некорректно введена дата');
      return;
    }

    this.fightEvent = new FightEvent(date, this.opponent);
    this.fightEventsList.push(this.fightEvent);
    this.fightDate = '';
    this.opponent = '';
    this.saveLocalStorage(this.fightEvent);
  }

  clearEvents(): void{
    this.fightEventsList = [];
    localStorage.clear();
    this.savedRecordsCounter = 0;
  }
}
