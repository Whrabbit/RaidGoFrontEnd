import { EventEmitter, Injectable } from '@angular/core';
import { Event } from "../model/event.model";
import { Http } from '@angular/http';


@Injectable()
export class EventService{
  eventEmit = new EventEmitter<Event[]>();
  event;

  url = 'https://raidgosql.herokuapp.com/api/event';
  urlPop = 'https://raidgosql.herokuapp.com/api/event/rp';

  // url = 'http://localhost:3040/api/event';
  // urlPop = 'http://localhost:3040/api/event/rp';

  private eventList: Event[] = [];

  constructor(private http: Http){}

  getEvents(){
    this.http.get(this.url)
      .subscribe((events) => {
       this.eventList = events.json();
       this.eventEmit.emit(this.eventList.slice());
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
    return this.http.post(this.url, event);
  }

  updateEvent(id: string, event){
    return this.http.put(this.url + '/' + id, event);
  }

  getEventWithPlayers(id: string){
    return this.http.get(this.url + '/' + id);
  }

  addPlayer(id: string, player, event){
    return this.http.post(this.url + '/' + id, {event: event, playerId: player.id});
  }

  removePlayer(id: string, player, event){
    return this.http.put(this.urlPop + '/' + id, {event: event, playerId: player.id});
  }


}
