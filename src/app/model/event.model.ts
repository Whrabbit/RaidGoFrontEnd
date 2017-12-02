import { Player } from "./player.model";

export class Event{
  constructor(public pokemonName: string,
              public gymName: string,
              public time: string,
              public pastDate: Date,
              public pastTime: string,
              public players: Player[]){}
}
