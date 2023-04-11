import { ChangeEvent, useState } from "react";
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer";
import { ICards } from "./Components/Card/Card";
import Form from "./Components/Form/Form";

const teams = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];

function App() {
  const [cards, setCards] = useState<ICards[]>([]);

  const addCard = (card: ICards) => {
    setCards([...cards, card]);
  };

  const team = teams.map((team) => team);

  return (
    <div className="App">
      <header>
        <img className="w-full" src="./imagens/header.svg" alt="" />
      </header>
      <Form cardRegistered={(card) => addCard(card)} teams={team} />.
      {teams.map((team) => (
        <Board cards={cards} team={team} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
