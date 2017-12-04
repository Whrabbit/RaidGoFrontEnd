import { Event } from "./event.model";

export class Player{

  public event: Event;

  constructor(public username: string,
              public password: string,
              public playerLevel: number){}
}
