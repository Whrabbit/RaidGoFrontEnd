import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Event } from "../model/event.model";
import {EventService} from "./event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }



}
