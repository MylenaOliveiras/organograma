import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import { ICards } from "../Card/Card";
import Seletor from "../Seletor/Seletor";
import Titulo from "../Titulo/Titulo";
import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times: [..];

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
            console.log("eis um novo card => ", nome, cargo, imagem);
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
            times={times}
            aoAlterado={(valor) => setTime(valor)}
            value={time}
          />
          <Botao descricao="Criar card" />
        </form>
      )}

      <section className="py-20">
        <main className="text-center">
          <h1 className="font-prata font-normal text-4xl text-purple">
            Minha Organização:
          </h1>
          <div className="bg-purple w-12 h-1 m-auto mt-4"></div>
        </main>

        <div className="flex place-content-end">
          <button
            className="animate-bounce rounded-full bg-purple mr-36 lg:-mt-14"
            onClick={visible}
          >
            <img src="./public/imagens/buttonplus.svg" className="w-20" />
          </button>
        </div>
      </section>
    </section>
  );
}
