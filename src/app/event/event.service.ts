import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "../model/player.model";
import {Event} from "../model/event.model";


@Injectable()
export class EventService{
  eventSelected = new EventEmitter<Event>();
  private eventList: Event[] = [
    new Event('1',
      'pokemonname',
      'gymname',
      'time',
      new Date(2,12,2017),
      'asd',
      [new Player('playername',
        'password',
        12)]
    ),
    new Event('2',
      'pokemonname1',
      'gymname1',
      'time',
      new Date(2,12,2017),
      'asd',
      [new Player('playername',
        'password',
        12)]
    )
  ];

  constructor(){}

  getEvents(){
    return this.eventList.slice();
  }

  getEvent(id: number){
    return this.findbyId[id];

  }

  findbyId(id: string){
    for(let i of this.eventList){
      if(i.id === id){
        return i;
      }
    }
  }
}
