import { Event } from "./event.model";

export class Player{

  public event: Event;

  constructor(public id: string,
              public username: string,
              public password: string,
              public level: number,
              public gymColor: string){}
}
