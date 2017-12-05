import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EventService} from "../event.service";
import {Event} from '../../model/event.model';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-event-new',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @ViewChild('f') eventForm: NgForm;
  editedEvent: Event;


  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService) {
  }


  ngOnInit() {
    if (this.ownEvent()) {
      this.route.params
        .subscribe((Params) => {
          this.editedEvent = this.eventService.getEvent(Params['id']);
          console.log(Params['id'])
        });
      console.log(this.editedEvent.pokemonName);
      console.log(this.editedEvent.gym);
     setTimeout(() => {
       this.eventForm.setValue({
         pokemonName: this.editedEvent.pokemonName,
         gymName: this.editedEvent.gym[0].gymName,
         gymColor: this.editedEvent.gym[0].gymColor,
         time: this.editedEvent.time
       });

     },1)
    } else {
      setTimeout(() => {
        this.eventForm.setValue({
          pokemonName: '',
          gymName: '',
          gymColor:'',
          time: ''
        });

      },1)
    }
  }

  onSubmit() {
    if (this.ownEvent()) {
      this.eventService.updateEvent(this.editedEvent._id, this.eventForm.value)
        .subscribe(
          (response) => {
            this.router.navigate(['event/myevents']);
            console.log(response)
          }
        )
    } else {
      this.eventService.addEvent(this.eventForm.value)
        .subscribe(
          (response) => {
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        )
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  compareDates() {
    let current = new Date();
    let time = this.eventForm.value.time;
    let x = time.indexOf(':');
    let hours = time.substr(0, x);
    let minutes = time.substr(x + 1, time.length);
    let month = current.getMonth() + 1;
    let monthStr = month + '';
    if (monthStr.length < 2) {
      monthStr = '0' + monthStr;
    }
    let day = current.getUTCDate() + '';
    if (day.length < 2) {
      day = '0' + day;
    }
    let dateStr = '' + current.getFullYear() + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':00Z'
    let eventDate = new Date(dateStr);
    let now = new Date();

    return eventDate > now;
  }

  ownEvent() {
    return window.location.href.indexOf('myevent/edit') !== -1;
  }

}
