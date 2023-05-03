import { Cards } from "../Card/types";

export interface IBoard {
  cards: Cards[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}
