import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event.model'
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../event.service";
import {Player} from "../../model/player.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  id: string;
  players: Player[];
  @Input() myEvent: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.params
      .subscribe((Params) => {
        this.event = this.eventService.getEvent(Params['id']);
      });

    console.log(this.ownEvent())
  }

  onEditEvent(id: string){
    this.router.navigate(['myevent/edit', this.event._id]);
  }


  ownEvent() {
    return window.location.href.indexOf('myevent') !== -1;
  }

}
