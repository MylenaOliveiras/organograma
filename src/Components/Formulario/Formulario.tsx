import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import { ICards } from "../Card/Card";
import Seletor from "../Seletor/Seletor";
import Titulo from "../Titulo/Titulo";

import Seção from "../Seção/Seção";
import { useState } from "react";

interface IForm {
  times: string[];
  cardCadastrado: (card: ICards) => void;
}

export default function Formulario({ times, cardCadastrado }: IForm) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [showForm, setshowForm] = useState(false);

  function visible() {
    setshowForm((showForm) => !showForm);
  }
  return (
    <section>
      {showForm && (
        <form
          className="bg-gray max-w-screen-lg py-9 px-16 shadow-lg rounded-3xl m-auto mt-20"
          onSubmit={(e) => {
            e.preventDefault();
            cardCadastrado({
              nome,
              cargo,
              imagem,
              time,
            });
          }}
        >
          <Titulo titulo="Preencha os dados para criar o card do colaborador." />
          <CampoTexto
            placeholder="Digite seu nome"
            label="Nome"
            value={nome}
            onChange={(valor) => setNome(valor)}
          />
          <CampoTexto
            placeholder="Digite seu cargo"
            label="Cargo"
            value={cargo}
            onChange={(valor) => setCargo(valor)}
          />
          <CampoTexto
            placeholder="Informe o endereço da Imagem"
            label="Imagem"
            value={imagem}
            onChange={(valor) => setImagem(valor)}
          ></CampoTexto>
          <Seletor
            label="Time: "
            aoAlterado={(valor) => setTime(valor)}
            value={time}
            times={times}
          />
          <Botao descricao="Criar card" />
        </form>
      )}

      <Seção onClick={visible} />
    </section>
  );
}
