import { ICards } from "../Card/types";

export interface IForm {
  teams: string[];
  cardRegistered: (card: ICards) => void;
}
