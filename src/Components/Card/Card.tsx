import React, { useState } from "react";

export interface ICards {
  nome: string;
  cargo: string;
  imagem: string;
  time: string;
}
export default function Card({ nome, cargo, imagem, time }: ICards) {
  let background = "bg-green";

  if (time == "Front-End") {
    background = "bg-blue";
  } else if (time == "Data Science") {
    background = "bg-lime";
  } else if (time == "Devops") {
    background = "bg-red";
  } else if (time == "Ux e Design") {
    background = "bg-pink";
  } else if (time == "Mobile") {
    background = "bg-yellow";
  } else if (time == "Inovaçao e Gestão") {
    background = "bg-orange";
  }

  return (
    <div className="w-64 bg-white rounded-xl center min-w-min">
      <header className={`${background} h-24 rounded-t-xl	-mb-14`}></header>
      <img src={imagem} className="w-32 rounded-full mx-auto" />
      <h1 className="text-purple font-montserrat font-semibold text-lg pt-3 ">
        {nome}
      </h1>
      <p className="pt-2 break-words font-montserrat text-base	">{cargo}</p>
    </div>
  );
}
