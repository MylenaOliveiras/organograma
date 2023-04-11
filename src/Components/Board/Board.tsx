import Titulo from "../Title/Title";
import Card, { ICards } from "../Card/Card";

interface IBoard {
  cards: ICards[];
  team: string;
}
export default function Board({ team, cards }: IBoard) {
  let primary = "bg-green/20";
  let secondary = "bg-green";

  if (team == "Front-End") {
    primary = "bg-blue/20";
    secondary = "bg-blue";
  } else if (team == "Data Science") {
    primary = "bg-lime/20";
    secondary = "bg-lime";
  } else if (team == "Devops") {
    primary = "bg-red/20";
    secondary = "bg-red";
  } else if (team == "Ux e Design") {
    primary = "bg-pink/20";
    secondary = "bg-pink";
  } else if (team == "Mobile") {
    primary = "bg-yellow/20";
    secondary = "bg-yellow";
  } else if (team == "Inovação e Gestão") {
    primary = "bg-orange/20";
    secondary = "bg-orange";
  }

  return (
    <section className={` h-auto text-center py-10 px-10 ${primary}`}>
      <Titulo>{team}</Titulo>
      <div className={`w-8 h-1 m-auto my-3 ${secondary}`} />
      <div className="flex gap-6 ">
        {cards
          .filter((card) => card.team === team)
          .map((card) => (
            <Card
              name={card.name}
              position={card.position}
              team={card.team}
              image={card.image}
            />
          ))}
      </div>
    </section>
  );
}
