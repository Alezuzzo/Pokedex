import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import { HomeContainer } from "./style.js";

// import { Container } from './styles';

function Home() {
  const [pokes, setPokes] = useState([]);
  const getAllPokes = async () => {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
    );
    let resJson = await response.json();
    console.log(resJson);
    setPokes(resJson.results);
  };

  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    <HomeContainer>
      {pokes &&
        pokes.map((Poke, index) => <Card name={Poke.name} index={index} />)}
    </HomeContainer>
  );
}

export default Home;
