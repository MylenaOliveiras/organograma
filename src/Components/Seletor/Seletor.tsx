import React from "react";

export interface ISeletor {
  times: [];
  value: string;
  label: string;
  aoAlterado: (value: string) => void;
}
export default function Seletor({ times, aoAlterado, value, label }: ISeletor) {
  return (
    <label>
      {label}
      <select
        className="p-6 w-full shadow-lg my-6"
        onChange={(evento) => aoAlterado(evento.target.value)}
        value={times}
      >
        {times.map((time) => (
          <option label={time} key={time} value={time} />
        ))}
      </select>
    </label>
  );
}
