import { Player } from "./player.model";
import { Gym } from "./gym.model";

export class Event{
  constructor(public _id: string,
              public pokemonName: string,
              public gym: Gym,
              public time: string,
              public pastDate: Date,
              public player: Player[]){}
}
