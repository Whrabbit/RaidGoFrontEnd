import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event.model'
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../event.service";
import {Player} from "../../model/player.model";
import {AccountService} from "../../account/account.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() myEvent: boolean;
  event: Event;
  id: string;
  loggedIn = false;
  joined = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.loggedIn = this.accountService.loggedIn;
    this.accountService.loginEvent
      .subscribe((result) => {
        this.loggedIn = result;
      });

    this.route.params
      .subscribe((Params) => {
        this.event = this.eventService.getEvent(Params['id']);
        if(this.loggedIn){
          this.joined = this.contains(this.accountService.user.id)
        }
      });

  }

  onEditEvent(id: string) {
    this.router.navigate(['myevent/edit', this.event._id]);
  }


  ownEvent() {
    return window.location.href.indexOf('myevent') !== -1;
  }

  onJoin() {
    if (this.joined) {
      let player = this.accountService.user;
      this.eventService.removePlayer(this.event._id, player, this.event)
        .subscribe(
          (response) => {
            this.eventService.getEventWithPlayers(this.event._id)
              .subscribe(
                (response) => {
                  this.event = response.json();
                  this.joined = this.contains(this.accountService.user.id)
                })
          })
    } else {
      let player = this.accountService.user;
      this.eventService.addPlayer(this.event._id, player, this.event)
        .subscribe(
          (response) => {
            this.eventService.getEventWithPlayers(this.event._id)
              .subscribe(
                (response) => {
                  this.event = response.json();
                  if(this.loggedIn){
                    this.joined = this.contains(this.accountService.user.id)
                  }
                })
          })
    }

  }

  contains(id: string) {
      for (let player of this.event.player) {
        if (player == id) {
          return true;
        }
      }
    return false;
  }

}
