import { Player } from "./player.model";

export class Event{
  constructor(private pokemonName: string,
              private gymName: string,
              private time: string,
              private pastDate: Date,
              private pastTime: string,
              private players: Player[]){}
}
