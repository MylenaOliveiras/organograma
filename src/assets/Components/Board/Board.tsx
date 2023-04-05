import Titulo from "../Titulo/Titulo";
import Card, { ICards } from "../Card/Card";
import { useState } from "react";

interface IBoard {
  cards: ICards[];
  areas:
    | "Back-End"
    | "Front-End"
    | "Data Science"
    | "Devops"
    | "Ux e Design"
    | "Mobile"
    | "Inovaçao e Gestão";
}

export default function Board({ areas }: IBoard) {
  const [cards, setCards] = useState<ICards[]>([]);

  function newCard(card: ICards) {
    setCards([...cards, card]);
  }

  let background = "bg-green/20";
  let bgbarra = "bg-green";

  if (areas == "Front-End") {
    background = "bg-blue/20";
    bgbarra = "bg-blue";
  } else if (areas == "Data Science") {
    background = "bg-lime/20";
    bgbarra = "bg-lime";
  } else if (areas == "Devops") {
    background = "bg-red/20";
    bgbarra = "bg-red";
  } else if (areas == "Ux e Design") {
    background = "bg-pink/20";
    bgbarra = "bg-pink";
  } else if (areas == "Mobile") {
    background = "bg-yellow/20";
    bgbarra = "bg-yellow";
  } else if (areas == "Inovaçao e Gestão") {
    background = "bg-orange/20";
    bgbarra = "bg-orange";
  }

  return (
    <section className={`w-full h-auto text-center py-10 ${background}`}>
      <Titulo titulo={areas} />
      <div className={`w-8 h-1 m-auto my-3 ${bgbarra}`} />
      <div className="flex gap-6 mx-40">
        {cards.map((card) => (
          <Card
            nome={card.nome}
            cargo={card.cargo}
            areas={card.areas}
            imagem={card.imagem}
            newCard={newCard}
          />
        ))}
      </div>
    </section>
  );
}
