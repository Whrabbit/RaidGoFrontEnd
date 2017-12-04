import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EventService} from "../event.service";

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {
  id: number;
  editMode = false;

  // currentDate = Date.now();
  // scope = Date.UTC(this.d.getFullYear(),
  //   this.d.getFullYear(),
  //   );

  @ViewChild('f') eventForm: NgForm;



  submitted = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService) {
  }



  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }
  onSubmit() {

    // this.router.navigate(['../'], {relativeTo: this.route});
    // this.submitted = true;
    // this.event.pokemonName = this.eventForm.value.pokemonData.pokemonName;
    // this.event.gym.gymName = this.eventForm.value.pokemonData.gymName;
    // this.event.gym.gymcolor = this.eventForm.value.pokemonData.gymcolor;
    // this.event.time = this.eventForm.value.pokemonData.time;

    // this.eventService.addEvent(this.eventForm.value.pokemonData)
    //   .subscribe(
    //     (response) => {
    //       //this.router.navigate(['../'], {relativeTo: this.route});
    //     }
    //   )

  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  compareDates() {
    let current = new Date();
    let time = this.eventForm.value.pokemonData.time;
    let x  = time.indexOf(':');
    let hours = time.substr(0, x);
    let minutes = time.substr(x+1, time.length);
    let month = current.getMonth() + 1;
    let monthStr = month + '';
    if(monthStr.length < 2){
      monthStr = '0' + monthStr;
    }
    let day = current.getUTCDate() + '';
    if(day.length < 2){
      day = '0' + day;
    }
    let dateStr = '' + current.getFullYear() + '-' +  month + '-' +  day + 'T' +  hours + ':' +  minutes + ':00Z'
    let eventDate = new Date(dateStr);
    let now = new Date();

    return eventDate > now;
  }


}
