import * as React from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import Seletor from "../Seletor/Seletor";
import Titulo from "../Titulo/Titulo";

export default function Formulario() {
  return (
    <form className="bg-gray max-w-screen-lg py-9 px-16 shadow-lg	rounded-3xl m-auto mt-20">
      <Titulo titulo="Preencha os dados para criar o card do colaborador." />
      <CampoTexto placeholder="Digite seu nome" label="Nome"></CampoTexto>
      <CampoTexto placeholder="Digite seu cargo" label="Cargo"></CampoTexto>
      <CampoTexto
        placeholder="Informe o endereço da Imagem"
        label="Imagem"
      ></CampoTexto>
      <Seletor />
      <Botao descricao="Criar card" />
    </form>
  );
}
