import React from "react";

export interface ISeletor {
  times: string[];
  value: string;
  label: string;
  aoAlterado: (value: string) => void;
}
export default function Seletor({ times, aoAlterado, value, label }: ISeletor) {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
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
        {times.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
    </div>
  );
}
