import { useState } from "react";
import Board from "./Components/Board/Board";
import Formulario from "./Components/Formulario/Formulario";
import Footer from "./Components/Footer/Footer";
import Card, { ICards } from "./Components/Card/Card";

function App() {
  const times = [
    { area: "Programação" },
    { area: "Front-End" },
    { area: "Data Science" },
    { area: "Devops" },
    { area: "UX e Design" },
    { area: "Mobile" },
    { area: "Inovação e Gestão" },
  ];

  const [cards, setCards] = useState<ICards[]>([]);

  function addCard(card: ICards) {
    setCards([...cards, card]);
  }

  return (
    <div className="App">
      <header>
        <img className="w-full" src="./public/imagens/header.svg" alt="" />
      </header>
      <Formulario />
      <Board areas="Back-End" cards={cards} />
      <Board areas="Front-End" cards={cards} />
      <Board areas="Data Science" cards={cards} />
      <Board areas="Devops" cards={cards} />
      <Board areas="Ux e Design" cards={cards} />
      <Board areas="Mobile" cards={cards} />
      <Board areas="Inovaçao e Gestão" cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
