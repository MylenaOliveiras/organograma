import { ChangeEvent, useState } from "react";
import Board from "./Components/Board/Board";
import Formulario from "./Components/Formulario/Formulario";
import Footer from "./Components/Footer/Footer";

const times = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const time = times.map((time) => time);

  return (
    <div className="App">
      <header>
        <img className="w-full" src="./public/imagens/header.svg" alt="" />
      </header>
      <Formulario cardCadastrado={(card) => addCard(card)} times={time} />.
      {times.map((time) => (
        <Board cards={cards} time={time} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
