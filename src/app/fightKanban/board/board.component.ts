import { Component, OnInit } from '@angular/core';
import {Stages} from "../domenClasses/domen-stage";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  stages = Stages;

  constructor() { }
  ngOnInit(): void {
  }

}
