import { Player } from "./player.model";

export class Event{
  constructor(public id: string,
              public pokemonName: string,
              public gymName: string,
              public time: string,
              public pastDate: Date,
              public pastTime: string,
              public players: Player[]){}
}
