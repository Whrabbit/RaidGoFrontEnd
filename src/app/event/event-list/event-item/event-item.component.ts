import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../model/event.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEventClicked(){
    this.router.navigate(['/event',  this.event._id]);

  }

}
