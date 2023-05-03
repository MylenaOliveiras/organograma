import { Cards } from "../Card/types";

export interface IForm {
  teams: string[];
  cardRegistered: (card: Cards) => void;
}
