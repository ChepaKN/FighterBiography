import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {SearchFightService} from "./search-fight.service";
import {FightEvent} from "../fight-event";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [SearchFightService]
})
export class AutocompleteComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('input')
  input: ElementRef;

  results: FightEvent[] = [];
  requests: string[] = [];
  subscription: Subscription;

  @Input()
  fightEventsList: FightEvent[] = [];

  constructor(private searchFightService: SearchFightService) { }

  ngAfterViewInit(): void {
    const input: HTMLInputElement = this.input.nativeElement as HTMLInputElement;

    this.subscription = fromEvent(input, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value),
        filter(val => val.length > 1),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(value => {
        this.results = this.searchFightService.getResultsByName(value, this.fightEventsList);
        this.requests.push(value);
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearRequests() {
    this.requests = [];
  }
}
