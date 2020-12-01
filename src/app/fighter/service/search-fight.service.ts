import {Injectable, Input, OnInit} from '@angular/core';
import {FightEvent} from "../fight-event";

@Injectable()
export class SearchFightService {

  constructor() { }


  //Поиск по имени
  getResultsByName(searchTerm: string, fightEventsList: FightEvent[]): FightEvent[] {
    return fightEventsList.filter(fight => fight.opponentName.startsWith(searchTerm));
  }



  // getResultsAsync(searchTerm: string, fightEventsList: FightEvent[],  callBack: Function): void {
  //   setTimeout(() => callBack(fightEventsList
  //     .filter(fight => fight.opponentName.startsWith(searchTerm))), 2000 * Math.random());
  // }
}
