import React from "react";

export default function Seletor() {
  const areas = [
    "Back-End",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovaçao e Gestão",
  ];
  return (
    <label>
      Time:
      <select className="p-6 w-full shadow-lg my-6">
        {areas.map((area) => (
          <option label={area} value={area} />
        ))}
      </select>
    </label>
  );
}
