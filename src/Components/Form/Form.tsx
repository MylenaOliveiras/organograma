import Botao from "../Botao/Botao";
import Input from "../Input/Input";
import { ICards } from "../Card/Card";
import Select from "../Select/Select";
import Title from "../Title/Title";

import Section from "../Section/Section";
import { useState } from "react";

interface IForm {
  teams: string[];
  cardRegistered: (card: ICards) => void;
}

export default function Form({ teams, cardRegistered }: IForm) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");

  const [showForm, setShowForm] = useState(false);
  function visible() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <section>
      {showForm && (
        <form
          className="bg-gray max-w-screen-lg py-9 px-16 shadow-lg rounded-3xl m-auto mt-20"
          onSubmit={(e) => {
            e.preventDefault();
            cardRegistered({
              name,
              position,
              image,
              team,
              primaryColor,
            });
            setPosition("");
            setName("");
            setImage("");
            setTeam("");
          }}
        >
          <Title>Preencha os dados para criar o card do colaborador</Title>
          <Input
            placeholder="Digite seu nome"
            label="Nome"
            value={name}
            onChange={(value) => setName(value)}
          />
          <Input
            placeholder="Digite seu cargo"
            label="Cargo"
            value={position}
            onChange={(value) => setPosition(value)}
          />
          <Input
            placeholder="Informe o endereço da Imagem"
            label="Imagem"
            value={image}
            onChange={(value) => setImage(value)}
          ></Input>
          <Select
            label="Time: "
            newValue={(value) => setTeam(value)}
            value={team}
            teams={teams}
          />
          <Botao>Criar card</Botao>
        </form>
      )}

      <Section onClick={visible} />
    </section>
  );
}
