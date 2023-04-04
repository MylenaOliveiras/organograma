import { useState } from "react";
import Board from "./assets/Components/Board/Board";
import Formulario from "./assets/Components/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <header>
        <img className="w-full" src="./public/imagens/header.svg" alt="" />
      </header>
      <Formulario />
      <Board times="Back-End" />
      <Board times="Front-End" />
      <Board times="Data Science" />
      <Board times="Devops" />
      <Board times="Ux e Design" />
      <Board times="Mobile" />
      <Board times="Inovaçao e Gestão" />
    </div>
  );
}

export default App;
