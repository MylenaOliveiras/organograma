import * as React from "react";

export interface ICampoTexto {
  label: string;
  placeholder: string;
}

export default function CampoTexto({ label, placeholder }: ICampoTexto) {
  return (
    <div className="my-6">
      <label className="mb-2 block">{label}: </label>
      <input
        className="p-6 w-full shadow-lg outline-none"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
