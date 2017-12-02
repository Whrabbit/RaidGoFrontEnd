import { Event } from "./event.model";

export class Player{

  private event: Event;

  constructor(private userName: string,
              private password: string,
              private level: number){}
}
