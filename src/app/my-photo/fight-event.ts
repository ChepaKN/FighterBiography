export class FightEvent {
  fightDate: Date;
  opponentName: string;

  constructor(fightDate: Date, opponentName: string) {
    this.fightDate = fightDate;
    this.opponentName = opponentName;
  }
}
