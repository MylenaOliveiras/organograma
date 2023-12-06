import { Cards } from "../Card/types";

export interface IForm {
  teams: string[];
  cardRegistered: (card: Cards) => void;
}

export interface IFieldValues {
  team: string;
  name: string;
  image: string;
  position: string;
}
