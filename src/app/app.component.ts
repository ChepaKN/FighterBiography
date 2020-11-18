import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  fighterPageName = 'fighter';
  calculatorPageName = 'calculator';
  fightBoardName = 'fightBoard';
  selectedPage: string;
  pages: string[] = [this.fighterPageName, this.calculatorPageName, this.fightBoardName];
}
