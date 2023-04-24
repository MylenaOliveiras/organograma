import { ICards } from "../Card/Card";

export interface IBoard {
  cards: ICards[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}
