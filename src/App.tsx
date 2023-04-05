import { useState } from "react";
import Board from "./assets/Components/Board/Board";
import Formulario from "./assets/Components/Formulario/Formulario";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <img className="w-full" src="./public/imagens/header.svg" alt="" />
      </header>
      <Formulario />
      <Board areas="Back-End" />
      <Board areas="Front-End" />
      <Board areas="Data Science" />
      <Board areas="Devops" />
      <Board areas="Ux e Design" />
      <Board areas="Mobile" />
      <Board areas="Inovaçao e Gestão" />
      <Footer />
    </div>
  );
}

export default App;
