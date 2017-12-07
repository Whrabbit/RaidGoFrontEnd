import {Component, Input, OnInit} from '@angular/core';
import { Event } from "../../model/event.model";
import {EventService} from "../event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {


    this.eventService.getEvents();
    this.eventService.eventEmit
      .subscribe(
        (events) => {
            this.events = events;
        }
      )
  }

  myEvent() {
    return window.location.href.indexOf('myevents') !== -1;
  }
  onClick(){
    this.router.navigate(['newevent']);
  }

}
