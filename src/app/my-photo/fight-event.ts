export class FightEvent {
  fightDate: string;
  opponentName: string;

  constructor(fightDate: string, opponentName: string) {
    this.fightDate = fightDate;
    this.opponentName = opponentName;
  }
}
