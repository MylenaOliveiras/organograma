import Titulo from "../Titulo/Titulo";
import Card, { ICards } from "../Card/Card";

interface IBoard {
  cards: ICards[];
  time: string;
}
export default function Board({ time, cards }: IBoard) {
  let background = "bg-green/20";
  let bgbarra = "bg-green";

  if (time == "Front-End") {
    background = "bg-blue/20";
    bgbarra = "bg-blue";
  } else if (time == "Data Science") {
    background = "bg-lime/20";
    bgbarra = "bg-lime";
  } else if (time == "Devops") {
    background = "bg-red/20";
    bgbarra = "bg-red";
  } else if (time == "Ux e Design") {
    background = "bg-pink/20";
    bgbarra = "bg-pink";
  } else if (time == "Mobile") {
    background = "bg-yellow/20";
    bgbarra = "bg-yellow";
  } else if (time == "Inovaçao e Gestão") {
    background = "bg-orange/20";
    bgbarra = "bg-orange";
  }

  return (
    <section className={` h-auto text-center py-10 ${background}`}>
      <Titulo titulo={time} />
      <div className={`w-8 h-1 m-auto my-3 ${bgbarra}`} />
      <div className="flex gap-6 ">
        {cards
          .filter((card) => card.time === time)
          .map((card) => (
            <Card
              nome={card.nome}
              cargo={card.cargo}
              time={card.time}
              imagem={card.imagem}
            />
          ))}
      </div>
    </section>
  );
}
