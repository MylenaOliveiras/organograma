import React, { useState } from "react";

export interface ICards {
  name: string;
  position: string;
  image: string;
  team: string;
}
export default function Card({ name, position, image, team }: ICards) {
  let background = "bg-green";

  if (team == "Front-End") {
    background = "bg-blue";
  } else if (team == "Data Science") {
    background = "bg-lime";
  } else if (team == "Devops") {
    background = "bg-red";
  } else if (team == "Ux e Design") {
    background = "bg-pink";
  } else if (team == "Mobile") {
    background = "bg-yellow";
  } else if (team == "Inovação e Gestão") {
    background = "bg-orange";
  }

  return (
    <div className="w-64 bg-white rounded-xl center min-w-min pb-4 my-10">
      <header className={`${background} h-24 rounded-t-xl	-mb-14`}></header>
      <img src={image} className="w-32 rounded-full mx-auto" />
      <h1 className="text-purple font-montserrat font-semibold text-lg pt-3 ">
        {name}
      </h1>
      <p className="pt-2 break-words font-montserrat text-base	">{position}</p>
    </div>
  );
}
