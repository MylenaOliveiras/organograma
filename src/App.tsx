import { useState } from "react";
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer";
import { Cards } from "./Components/Card/types";
import Form from "./Components/Form/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTeam, postTeam } from "./api";
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

function App() {
  const { data, isLoading, isError } = useQuery<Cards[]>({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({ mutationFn: postTeam });

  const addCard = (card: Cards) => {
    mutate(card, {
      onSuccess() {
        queryClient.invalidateQueries(["team"]);
      },
    });
  };

  if (isError) {
    return (
      <div className="text-center mt-56">
        <img className="m-auto" src="./imagens/errorIcon.png" />
        <h1>Sorry, something went wrong. Please contact the administrator!</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="text-center mt-52">
        <img className="m-auto" src="./imagens/loadingIcon.gif" />
      </div>
    );
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
