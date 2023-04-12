import { useState, ChangeEvent } from "react";

export interface IInput {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({ label, placeholder, onChange, value }: IInput) {
  const onChanges = (evento: ChangeEvent<HTMLInputElement>) => {
    const newValue = evento.target.value;
    onChange(newValue);
  };

  return (
    <div className="my-6">
      <label className="mb-2 block">{label}: </label>
      <input
        className="p-6 w-full shadow-lg outline-none"
        placeholder={placeholder}
        onChange={onChanges}
        required
        value={value}
      ></input>
    </div>
  );
}
