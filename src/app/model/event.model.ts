import { Player } from "./player.model";
import { Gym } from "./gym.model";

export class Event{
  constructor(public id: string,
              public pokemonName: string,
              public gym: Gym,
              public time: string,
              public pastDate: Date,
              public pastTime: string,
              public players: Player[]){}
}
