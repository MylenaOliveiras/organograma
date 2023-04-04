import { useState } from "react";

export interface ICampoTexto {
  label: string;
  placeholder: string;
  textValue: string;
}

export default function CampoTexto({
  label,
  placeholder,
  textValue,
}: ICampoTexto) {
  const [text, setText] = useState("");

  return (
    <div className="my-6">
      <label className="mb-2 block">{label}: </label>
      <input
        className="p-6 w-full shadow-lg outline-none"
        placeholder={placeholder}
        onChange={(event) => setText(event.target.value)}
        value={text}
        required
      ></input>
    </div>
  );
}
