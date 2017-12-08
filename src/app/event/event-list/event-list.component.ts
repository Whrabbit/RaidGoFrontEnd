import {Component, Input, OnInit} from '@angular/core';
import { Event } from "../../model/event.model";
import {EventService} from "../event.service";
import {Router} from "@angular/router";
import {AccountService} from "../../account/account.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];
  loggedIn = false;
  constructor(private eventService: EventService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.accountService.loggedIn;
    this.eventService.getEvents();
    this.eventService.eventEmit
      .subscribe(
        (events) => {
            this.events = events;
        });

    this.accountService.loginEvent
      .subscribe((result) => {
        this.loggedIn = result;
      })
  }

  myEvent() {
    return window.location.href.indexOf('myevents') !== -1;
  }
  onClick(){
    this.router.navigate(['newevent']);
  }

}
