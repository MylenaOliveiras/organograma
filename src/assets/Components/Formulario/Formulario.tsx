import * as React from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import Seletor from "../Seletor/Seletor";
import Titulo from "../Titulo/Titulo";
import { useState } from "react";

export interface IForm {
  textValue: string;
  times:
    | "Back-End"
    | "Front-End"
    | "Data Science"
    | "Devops"
    | "Ux e Design"
    | "Mobile"
    | "Inovaçao e Gestão";
}

export default function Formulario({ textValue, times }: IForm) {
  const [card, setCard] = useState("");

  return (
    <form
      className="bg-gray max-w-screen-lg py-9 px-16 shadow-lg	rounded-3xl m-auto mt-20"
      onSubmit={(e) => {
        e.preventDefault();
        setCard("");
      }}
    >
      <Titulo titulo="Preencha os dados para criar o card do colaborador." />
      <CampoTexto
        placeholder="Digite seu nome"
        label="Nome"
        textValue={card}
      ></CampoTexto>
      <CampoTexto
        placeholder="Digite seu cargo"
        label="Cargo"
        textValue={card}
      ></CampoTexto>
      <CampoTexto
        placeholder="Informe o endereço da Imagem"
        label="Imagem"
        textValue={card}
      ></CampoTexto>
      <Seletor />
      <Botao descricao="Criar card" />
    </form>
  );
}
