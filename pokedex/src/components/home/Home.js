import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PokecardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Pokecard = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Home = () => {
  const [pokemonlist, setPokemonlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemonlist(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PokecardContainer>
      {pokemonlist.map((pokemon) => (
        <Pokecard key={pokemon.name}>
            <h2>{pokemon.name}</h2>
          
        </Pokecard>
      ))}
    </PokecardContainer>
  );
};

export default Home;
