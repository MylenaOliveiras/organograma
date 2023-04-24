export interface IFieldValues {
  name: string;
  team: string;
  position: string;
  image: string;
}

export interface IInput {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
