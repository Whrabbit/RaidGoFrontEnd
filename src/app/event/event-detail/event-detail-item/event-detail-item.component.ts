import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../model/player.model";
import {AccountService} from "../../../account/account.service";

@Component({
  selector: 'app-event-detail-item',
  templateUrl: './event-detail-item.component.html',
  styleUrls: ['./event-detail-item.component.css']
})
export class EventDetailItemComponent implements OnInit {
  @Input() player;


  constructor() {
  }

  ngOnInit() {

  }

}
