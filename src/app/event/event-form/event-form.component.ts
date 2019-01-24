import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../event.service";
import {Event} from '../../model/event.model';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @ViewChild('f') eventForm: NgForm;
  editedEvent: Event;
  time = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService) {
  }

  ngOnInit() {
    var timeString;

    if (this.ownEvent()) {
      this.route.params
        .subscribe((Params) => {
          this.editedEvent = this.eventService.getEvent(Params['id']);
          let timeEvent = new Date(this.editedEvent.time);
          timeString = this.twonumdidgit(timeEvent.getHours()) + ':' + this.twonumdidgit(timeEvent.getMinutes());
        });
      setTimeout(() => {
        this.eventForm.setValue({
          pokemonName: this.editedEvent.pokemonName,
          gymName: this.editedEvent.gym[0].gymName,
          gymColor: this.editedEvent.gym[0].gymColor,
          time: timeString
        });

      }, 1)
    } else {
      setTimeout(() => {
        this.eventForm.setValue({
          pokemonName: '',
          gymName: '',
          gymColor: '',
          time: ''
        });

      }, 1)
    }

  }

  onSubmit() {
    if (this.ownEvent()) {
      let postEvent = this.eventForm.value;
      postEvent.time = this.getFullDate(this.eventForm.value.time);

      this.eventService.updateEvent(this.editedEvent._id, postEvent)
        .subscribe(
          (response) => {
            this.router.navigate(['myevents']);
          }
        )
    } else {
      let postEvent = this.eventForm.value;
      postEvent.time = this.getFullDate(this.eventForm.value.time);

      this.eventService.addEvent(postEvent)
        .subscribe(
          (response) => {
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        )
    }
  }

  onCancel() {
    if (this.ownEvent()) {
      this.router.navigate(['myevents']);
    } else {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  getFullDate(timeString: String) {
    let current = new Date();
    let x = timeString.indexOf(':');
    let hours = timeString.substr(0, x);
    let hoursmin = parseInt(hours) - 1;
    let hourStr = hoursmin + '';
    if (hourStr.length < 2) {
      hourStr = '0' + hourStr;
    }
    let minutes = timeString.substr(x + 1, timeString.length);
    let month = current.getMonth() + 1;
    let monthStr = month + '';
    if (monthStr.length < 2) {
      monthStr = '0' + monthStr;
    }
    let day = current.getUTCDate() + '';
    if (day.length < 2) {
      day = '0' + day;
    }
    let dateStr = '' + current.getFullYear() + '-' + month + '-' + day + 'T' + hourStr + ':' + minutes + ':00Z';
    let eventDate = new Date(dateStr);
    return eventDate;
  }

  twonumdidgit(singleDidgit: any) {
    let result = singleDidgit + '';
    if (result.length === 1) {
      result = '0' + singleDidgit;
    }
    return result
  }

  ownEvent() {
    return window.location.href.indexOf('myevent/edit') !== -1;
  }


}
