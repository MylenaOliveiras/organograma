export interface IForm {
  teams: string[];
  cardRegistered: (card: IFieldValues) => void;
}

export interface IFieldValues {
  name: string;
  position: string;
  image: string;
  team: string;
}
