import { Component, OnInit } from '@angular/core';
import {Event} from '../../model/event.model'
import {ActivatedRoute, Params} from "@angular/router";
import {EventService} from "../event.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  id: number;
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.route.params
      .subscribe((Params) => {
        console.log(this.event)
        this.event = this.eventService.getEvent(Params['id']);

      });

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.event = this.eventService.getEvent(this.id);
    //     }
    //   );
  }

}
