import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AccountService{
  loginEvent = new EventEmitter<boolean>();
  loggedIn: boolean = false;

  url = 'https://raidgosql.herokuapp.com/api/user';
  loginUrl = 'https://raidgosql.herokuapp.com/api/login';

  // url = 'http://localhost:3040/api/user';
  // loginUrl = 'http://localhost:3040/api/login';

  constructor(private http: Http){}

  addUser(player){
    return this.http.post(this.url, player);
  }

  loginUser(player){
    return this.http.post(this.loginUrl, player);
  }

  logOut() {
    this.loggedIn = false;
    this.loginEvent.emit(false);
  }
}
