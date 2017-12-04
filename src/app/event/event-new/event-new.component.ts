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
  @ViewChild('f') eventForm: NgForm;


  // event = {
  //   pokemonName: '',
  //   gymName: '',
  //   gymcolor: '',
  //   time: '',
  // };
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

    this.eventService.addEvent(this.eventForm.value.pokemonData)
      .subscribe(
        (response) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      )

  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
