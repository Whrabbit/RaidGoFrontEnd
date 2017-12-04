import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "../model/player.model";
import {Event} from "../model/event.model";
import {Gym} from "../model/gym.model";


@Injectable()
export class EventService{
  eventSelected = new EventEmitter<Event>();

  private eventList: Event[] = [
    new Event('1',
      'pokemonname',
      new Gym('Speeltuin', 'Blauw'),
      'time',
      new Date(2,12,2017),
      'asd',
      [new Player('player 3',
        'password',
        12),
        new Player('player 2',
          'password',
          36)]
    ),
    new Event('2',
      'pokemonname1',
      new Gym('Waterfontein', 'Rood'),
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

  getEvent(id: string){
    console.log('sdfsdf')
    return this.findbyId(id);

  }

  findbyId(id: string){
    for(let i of this.eventList){
      if(i.id === id){
        return i;
      }
    }
  }

}
