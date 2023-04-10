import { useState, ChangeEvent } from "react";

export interface ICampoTexto {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function CampoTexto({
  label,
  placeholder,
  onChange,
}: ICampoTexto) {
  const [valor, setValor] = useState("");
  const aoAlterado = (evento: ChangeEvent<HTMLInputElement>) => {
    const novoValor = evento.target.value;
    setValor(novoValor);
    onChange(novoValor);
  };

  return (
    <div className="my-6">
      <label className="mb-2 block">{label}: </label>
      <input
        className="p-6 w-full shadow-lg outline-none"
        placeholder={placeholder}
        onChange={aoAlterado}
        value={valor}
        required
      ></input>
    </div>
  );
}
