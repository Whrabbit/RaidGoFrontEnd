import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../model/event.model";
import { Router} from "@angular/router";
import {AccountService} from "../../../account/account.service";


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;
  @Input() myEvent: boolean;
  loggedIn = false;


  constructor(private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
    this.loggedIn = this.accountService.loggedIn;
    this.accountService.loginEvent
      .subscribe((result) => {
        this.loggedIn = result;
      });

  }

  onEventClicked(){
    if(this.myEvent){
      this.router.navigate(['/myevent',  this.event._id]);
    }else{
      this.router.navigate(['/event',  this.event._id]);
    }
  }


}
