import {Injectable} from '@angular/core';
import {Player} from "../model/player.model";
import {Event} from "../model/event.model";


@Injectable()
export class EventService{
  private event: Event[] = [
    new Event(
      'pokemonname',
      'gymname',
      'time',
      new Date(2,12,2017),
      'asd',
      [new Player('playername',
        'password',
        12)]
    ),
    new Event(
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
    return this.event.slice();
  }
}
