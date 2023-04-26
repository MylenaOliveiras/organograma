import { useState } from "react";
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer";
import { ICard } from "./Components/Card/types";
import { IFieldValues } from "./Components/Form/types";
import Form from "./Components/Form/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const teams = [
  {
    name: "Programação",
    primary: "bg-green",
    secondary: "bg-green/20",
  },
  {
    name: "Front-End",
    primary: "bg-blue",
    secondary: "bg-blue/20",
  },
  {
    name: "Data Science",
    primary: "bg-lime",
    secondary: "bg-lime/20",
  },
  {
    name: "Devops",
    primary: "bg-red",
    secondary: "bg-red/20",
  },
  {
    name: "UX e Design",
    primary: "bg-pink",
    secondary: "bg-pink/20",
  },
  {
    name: "Mobile",
    primary: "bg-yellow",
    secondary: "bg-yellow/20",
  },
  {
    name: "Inovação e Gestão",
    primary: "bg-orange",
    secondary: "bg-orange/20",
  },
];
async function getTeam() {
  const response = await fetch("/team");
  const data = await response.json();
  return data;
}

async function postTeam(values: IFieldValues) {
  const response = await fetch("/team", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}

function App() {
  const { data, isLoading, isError } = useQuery<ICard[]>({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({ mutationFn: postTeam });

  const addCard = (card: IFieldValues) => {
    mutate(card, {
      onSuccess() {
        queryClient.invalidateQueries(["team"]);
      },
    });
  };

  if (isLoading) {
    return <img className="w-40 m-auto mt-72" src="/imagens/loading.gif"></img>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <div className="App">
      <header>
        <img className="w-full" src="./imagens/header.svg" />
      </header>
      <Form
        cardRegistered={(data) => addCard(data)}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team, index) => (
        <Board
          key={index}
          cards={data || []}
          team={team.name}
          primaryColor={team.primary}
          secondaryColor={team.secondary}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
