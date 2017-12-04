import { Component, OnInit } from '@angular/core';
import {Event} from '../../model/event.model'
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../event.service";
import {Player} from "../../model/player.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  id: number;
  players: Player[];
  constructor(private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.params
      .subscribe((Params) => {
        this.event = this.eventService.getEvent(Params['id']);
      });
  }

}
