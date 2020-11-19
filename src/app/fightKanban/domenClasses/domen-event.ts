export class DomenEvent {
  date: Date;
  title: string;
  location: string;

  constructor(date: Date, title: string, location: string) {
    this.date = date;
    this.title = title;
    this.location = location;
  }
}
