import React from "react";

export interface ISelect {
  teams: string[];
  value: string;
  label: string;
  newValue: (value: string) => void;
}
export default function Select({ teams, newValue, value, label }: ISelect) {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(event) => newValue(event.target.value)}
        value={value}
        className="
          p-6
          w-full
          shadow-lg
          my-6"
        required
      >
        <option
          className=""
          label="Selecione o time que você pertence"
          value=""
        ></option>
        {teams.map((team) => {
          return <option key={team}>{team}</option>;
        })}
      </select>
    </div>
  );
}
