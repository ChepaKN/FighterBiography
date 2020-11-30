import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {SearchFightService} from "../service/search-fight.service";
import {FightEvent} from "../fight-event";
import {FighterComponent} from "../fighter.component";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, OnDestroy {

  @ViewChild('input')
  input: ElementRef;
  results: FightEvent[] = [];
  requests: FightEvent[] = [];
  subscription: Subscription;

  @Input()
  fightEventsList: FightEvent[] = [];
  // @ViewChild(FighterComponent)
  // fightEventsList:

  constructor(private searchFightService: SearchFightService) { }

  ngOnInit(): void {
    const input: HTMLInputElement = this.input.nativeElement as HTMLInputElement;

    this.subscription = fromEvent(input, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value),
        filter(val => val.length > 1),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(value => {
        this.searchFightService.getResultsByName(value, this.fightEventsList);
        // this.requests.push(fight);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
