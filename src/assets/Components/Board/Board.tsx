import Titulo from "../Titulo/Titulo";

interface ITitulo {
  titulo:
    | "Back-End"
    | "Front-End"
    | "Data Science"
    | "Devops"
    | "Ux e Design"
    | "Mobile"
    | "Inovaçao e Gestão";
}

export default function Board({ titulo }: ITitulo) {
  let background = "bg-green/20";

  if (titulo == "Front-End") {
    background = "bg-blue/20";
  } else if (titulo == "Data Science") {
    background = "bg-lime/20";
  } else if (titulo == "Devops") {
    background = "bg-red/20";
  } else if (titulo == "Ux e Design") {
    background = "bg-pink/20";
  } else if (titulo == "Mobile") {
    background = "bg-yellow/20";
  } else if (titulo == "Inovaçao e Gestão") {
    background = "bg-orange/20";
  }

  return (
    <section className={`w-full h-80 ${background}`}>
      <Titulo titulo={titulo} />
      <div className={`w-8 h-1 ${background}`} />
    </section>
  );
}
