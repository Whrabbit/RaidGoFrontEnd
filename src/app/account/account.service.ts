import { EventEmitter, Injectable } from '@angular/core';
import { Player } from "../model/player.model";
import { Http } from '@angular/http';

@Injectable()
export class AccountService{

  url = 'https://raidgosql.herokuapp.com/';
  // url = 'http://localhost:3040/api/player';

  constructor(private http: Http){}

  addUser(player){
    return this.http.post(this.url, player);
  }
}
