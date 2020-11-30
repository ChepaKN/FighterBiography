import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  fighterPageName = 'fighter';
  fightBoardName = 'fightBoard';
  selectedPage: string;
  pages: string[] = [this.fighterPageName, this.fightBoardName];
}


