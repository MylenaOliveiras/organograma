import React from "react";

const times = [
  "Back-End",
  "Front-End",
  "Data Science",
  "Devops",
  "Ux e Design",
  "Mobile",
  "Inovaçao e Gestão",
];

export interface ISeletor {
  areas: [];
}
export default function Seletor() {
  return (
    <label>
      Time:
      <select className="p-6 w-full shadow-lg my-6">
        {times.map((time) => (
          <option label={time} value={time} />
        ))}
      </select>
    </label>
  );
}
