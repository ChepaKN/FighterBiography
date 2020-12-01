import {Injectable} from '@angular/core';
import {FightEvent} from "../fight-event";

@Injectable()
export class SearchFightService {

  constructor() { }

  //Поиск по имени
  getResultsByName(searchTerm: string, fightEventsList: FightEvent[]): FightEvent[] {
    return fightEventsList.filter(fight => fight.opponentName.startsWith(searchTerm));
  }
}
