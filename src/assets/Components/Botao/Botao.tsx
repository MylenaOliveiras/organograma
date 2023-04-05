import { useState } from "react";
import { ICards } from "../Card/Card";

export interface IBotao {
  descricao: string;
  newCard: (card: ICards) => void;
}

function Botao({ descricao, newCard }: IBotao) {
  const [card, setCard] = useState("");

  return (
    <button
      className="bg-purple rounded-xl h-20 w-40 text-white font-montserrat font-bold text-xl mt-6 hover:text-turquoise
  "
      onSubmit={(e) => {
        e.preventDefault();
        setCard("");
      }}
    >
      {descricao}
    </button>
  );
}

export default Botao;
