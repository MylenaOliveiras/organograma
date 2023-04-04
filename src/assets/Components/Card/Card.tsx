import React, { useState } from "react";

export interface ICards {
  nome: string;
  cargo: string;
  imagem: string;
  areas:
    | "Back-End"
    | "Front-End"
    | "Data Science"
    | "Devops"
    | "Ux e Design"
    | "Mobile"
    | "Inovaçao e Gestão";
}

export default function Card({ nome, cargo, imagem, areas }: ICards) {
  let background = "bg-green";

  if (areas == "Front-End") {
    background = "bg-blue";
  } else if (areas == "Data Science") {
    background = "bg-lime";
  } else if (areas == "Devops") {
    background = "bg-red";
  } else if (areas == "Ux e Design") {
    background = "bg-pink";
  } else if (areas == "Mobile") {
    background = "bg-yellow";
  } else if (areas == "Inovaçao e Gestão") {
    background = "bg-orange";
  }

  return (
    <div className="w-64 h-64 bg-white rounded-xl center">
      <header className={`${background} h-24 rounded-t-xl	`}></header>
      <h1>{nome}</h1>
      <p>{cargo}</p>
    </div>
  );
}
