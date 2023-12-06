import Title from "../Title/Title";
import Section from "../Section/Section";
import { IFieldValues, IForm } from "./types";
import { useState } from "react";
import {
  FormWithMethods,
  useMethods,
  TextField,
  OutlinedButton,
  Select,
} from "@mylena-silva/my-ds";

export default function Form({ teams, cardRegistered }: IForm) {
  const [showForm, setShowForm] = useState(false);
  function visible() {
    setShowForm((showForm) => !showForm);
  }

  const methods = useMethods();

  const { reset, formState } = methods;
  const { isValid } = formState;

  function onSubmit({ image, name, position, team }: IFieldValues) {
    cardRegistered({
      image,
      name,
      position,
      team,
    });
    reset();
  }

  return (
    <section>
      {showForm && (
        <div className="p-20  shadow-2xl md:mx-60 mt-10 mx-0">
          <FormWithMethods methods={methods} onSubmit={onSubmit}>
            <Title>Preencha os dados para criar o card do colaborador</Title>
            <TextField
              name="name"
              placeholder="Digite seu nome"
              label="Nome"
              required
              fullWidth
            />
            <TextField
              name="position"
              placeholder="Digite seu cargo"
              label="Cargo"
              required
              fullWidth
            />
            <TextField
              name="image"
              placeholder="Digite o endereço da Imagem"
              label="Imagem"
              fullWidth
              required
            />
            <Select
              label="Time:"
              options={teams}
              name="teams"
              required
              fullWidth
            />
            <OutlinedButton type="submit" disabled={!isValid}>
              Criar card
            </OutlinedButton>
          </FormWithMethods>
        </div>
      )}

      <Section onClick={visible} />
    </section>
  );
}
