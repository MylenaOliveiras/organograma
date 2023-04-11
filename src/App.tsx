import { ChangeEvent, useState } from "react";
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer";
import { ICards } from "./Components/Card/Card";
import Form from "./Components/Form/Form";

const teams = [
  {
    name: "Programação",
    primary: "bg-green",
    secondary: "bg-green/20",
  },
  {
    name: "Front-End",
    primary: "bg-blue",
    secondary: "bg-blue/20",
  },
  {
    name: "Data Science",
    primary: "bg-lime",
    secondary: "bg-lime/20",
  },
  {
    name: "Devops",
    primary: "bg-red",
    secondary: "bg-red/20",
  },
  {
    name: "UX e Design",
    primary: "bg-pink",
    secondary: "bg-pink/20",
  },
  {
    name: "Mobile",
    primary: "bg-yellow",
    secondary: "bg-yellow/20",
  },
  {
    name: "Inovação e Gestão",
    primary: "bg-orange",
    secondary: "bg-orange/20",
  },
];

function App() {
  const [cards, setCards] = useState<ICards[]>([]);

  const addCard = (card: ICards) => {
    setCards([...cards, card]);
  };

  return (
    <div className="App">
      <header>
        <img className="w-full" src="./imagens/header.svg" />
      </header>
      <Form
        cardRegistered={(card) => addCard(card)}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => (
        <Board
          cards={cards}
          team={team.name}
          primaryColor={team.primary}
          secondaryColor={team.secondary}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
