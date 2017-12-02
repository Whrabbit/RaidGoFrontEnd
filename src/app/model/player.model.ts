import { Event } from "./event.model";

export class Player{

  public event: Event;

  constructor(public userName: string,
              public password: string,
              public level: number){}
}
