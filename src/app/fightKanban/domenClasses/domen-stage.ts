import {DomenEvent} from "./domen-event";

export class DomenStage {
  name: string;
  events: DomenEvent[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

export const Stages: DomenStage[] = [new DomenStage('В разработке'), new DomenStage('Утверждено'), new DomenStage('Завершено')];
