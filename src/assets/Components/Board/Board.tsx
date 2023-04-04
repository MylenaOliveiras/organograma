import Titulo from "../Titulo/Titulo";
import Card, { ICards } from "../Card/Card";

interface IBoard {
  times:
    | "Back-End"
    | "Front-End"
    | "Data Science"
    | "Devops"
    | "Ux e Design"
    | "Mobile"
    | "Inovaçao e Gestão";
  card: ICards[];
}

export default function Board({ times }: IBoard) {
  let background = "bg-green/20";
  let bgbarra = "bg-green";

  if (times == "Front-End") {
    background = "bg-blue/20";
    bgbarra = "bg-blue";
  } else if (times == "Data Science") {
    background = "bg-lime/20";
    bgbarra = "bg-lime";
  } else if (times == "Devops") {
    background = "bg-red/20";
    bgbarra = "bg-red";
  } else if (times == "Ux e Design") {
    background = "bg-pink/20";
    bgbarra = "bg-pink";
  } else if (times == "Mobile") {
    background = "bg-yellow/20";
    bgbarra = "bg-yellow";
  } else if (times == "Inovaçao e Gestão") {
    background = "bg-orange/20";
    bgbarra = "bg-orange";
  }

  return (
    <section className={`w-full h-auto text-center py-10 ${background}`}>
      <Titulo titulo={times} />
      <div className={`w-8 h-1 m-auto my-3 ${bgbarra}`} />
      <div className="flex gap-6 mx-40">
        {
          <Card
            nome="mylena"
            cargo="desenvolvedora react"
            imagem="skdjf"
            areas={"Front-End"}
          />
        }{" "}
      </div>
    </section>
  );
}
