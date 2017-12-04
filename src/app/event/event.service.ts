import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "../model/player.model";
import {Event} from "../model/event.model";
import {Gym} from "../model/gym.model";
import { Http } from '@angular/http';


@Injectable()
export class EventService{
  eventEmit = new EventEmitter<Event[]>();
  // url = 'https://raidgosql.herokuapp.com/api/event';
  url = 'http://localhost:3000/api/event';

  private eventList: Event[] = [];

  // private eventList: Event[] = [
  //   new Event('1',
  //     'pokemonname',
  //     new Gym('Speeltuin', 'Blauw'),
  //     'time',
  //     new Date(2,12,2017),
  //     [new Player('player 3',
  //       'password',
  //       12),
  //       new Player('player 2',
  //         'password',
  //         36)]
  //   ),
  //   new Event('2',
  //     'pokemonname1',
  //     new Gym('Waterfontein', 'Rood'),
  //     'time',
  //     new Date(2,12,2017),
  //     [new Player('playername',
  //       'password',
  //       12)]
  //   )
  // ];

  constructor(private http: Http){}

  getEvents(){
    this.http.get(this.url)
      .subscribe((events) => {
       this.eventList = events.json();
       this.eventEmit.emit(this.eventList.slice())
      })
  }

  getEvent(id: string){
    return this.findbyId(id);

  }

  findbyId(id: string){
    for(let i of this.eventList){
      if(i._id === id){
        return i;
      }
    }
  }
  addEvent(event){
    console.log(event)
    return this.http.post(this.url, event);

  }


}
