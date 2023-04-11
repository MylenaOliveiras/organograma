import * as React from "react";

export interface ITitle {
  title: string;
}

export default function Titulo({ title }: ITitle) {
  return <h1 className="font-prata font-normal text-4xl">{title}</h1>;
}
