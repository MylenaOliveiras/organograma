export interface ISelect {
  teams: string[];
  value: string;
  label: string;
  newValue: (value: string) => void;
}
