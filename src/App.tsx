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
      <Board titulo="Back-End" />
      <Board titulo="Front-End" />
      <Board titulo="Data Science" />
      <Board titulo="Devops" />
      <Board titulo="Ux e Design" />
      <Board titulo="Mobile" />
      <Board titulo="Inovaçao e Gestão" />
    </div>
  );
}

export default App;
