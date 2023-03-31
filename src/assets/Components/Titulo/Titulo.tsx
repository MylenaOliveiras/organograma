import * as React from "react";

export interface ITitulo {
  titulo: string;
}

export default function Titulo({ titulo }: ITitulo) {
  return <h1 className="font-prata font-normal text-4xl">{titulo}</h1>;
}
