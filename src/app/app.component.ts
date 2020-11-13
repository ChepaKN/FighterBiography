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
  selectedPage: string;
  pages: string[] = [this.fighterPageName, this.calculatorPageName];
}
