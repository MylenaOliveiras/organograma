import * as React from "react";

export interface IBotao {
  descricao: string;
}

function Botao({ descricao }: IBotao) {
  return (
    <button className="bg-purple rounded-xl h-20 w-40 text-white font-montserrat font-bold text-xl mt-6">
      {descricao}
    </button>
  );
}

export default Botao;
