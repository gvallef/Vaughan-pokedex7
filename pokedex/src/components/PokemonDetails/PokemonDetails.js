import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
  gap: 50px;
  justify-content: center;
`;

const DivDoMeio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemons([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const backgroundType = (type) => {
    switch (type) {
      case "normal":
        return "lightblue";
      case "fighting":
        return "red";
      case "flying":
        return "lightblue";
      case "poison":
        return "purple";
      case "ground":
        return "brown";
      case "rock":
        return "brown";
      case "bug":
        return "green";
      case "ghost":
        return "purple";
      case "steel":
        return "grey";
      case "fire":
        return "red";
      case "water":
        return "blue";
      case "grass":
        return "green";
      case "electric":
        return "yellow";
      case "psychic":
        return "pink";
      case "ice":
        return "lightblue";
      case "dragon":
        return "purple";
      case "dark":
        return "purple";
      case "fairy":
        return "pink";
      default:
        return "black";
    }
  };

  const pokemap = pokemons.map((poke) => (
    <Root>
      <div
        class="nes-container is-rounded"
        key={poke.name}
        style={{
          backgroundColor: backgroundType(poke.types[0].type.name),
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>Status:</h3>

        <b class="nes-text is-normal">HP:{poke.stats[0].base_stat}</b>

        <progress class="" value={poke.stats[0].base_stat} max="100"></progress>

        <b class="nes-text is-normal">Attack:{poke.stats[1].base_stat}</b>
        <progress class="" value={poke.stats[1].base_stat} max="100"></progress>

        <b class="nes-text is-normal">Defense:{poke.stats[2].base_stat}</b>
        <progress class="" value={poke.stats[2].base_stat} max="100"></progress>

        <b class="nes-text is-normal">
          Special-attack:{poke.stats[3].base_stat}
        </b>

        <progress class="" value={poke.stats[3].base_stat} max="100"></progress>

        <b class="nes-text is-normal">
          Special-defense:{poke.stats[4].base_stat}
        </b>

        <progress class="" value={poke.stats[4].base_stat} max="100"></progress>

        <b class="nes-text is-normal">Speed:{poke.stats[5].base_stat}</b>
        <progress class="" value={poke.stats[5].base_stat} max="100"></progress>
      </div>

      <DivDoMeio>
        <div
          class="nes-container is-rounded"
          key={poke.name}
          style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}
        >
          <p>Número de tipos: {poke.types.length}</p>

          <p>Tipo 1: {poke.types[0].type.name}</p>
          <p>Tipo 2: {poke.types[1] ? poke.types[1].type.name : "N/A"}</p>
        </div>
        <div
          class="nes-container is-rounded"
          key={poke.name}
          style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}
        >
          <img height="200px" src={poke.sprites.front_default} />
          <img height="200px" src={poke.sprites.back_default} />
        </div>
      </DivDoMeio>
      <div
        class="nes-container is-rounded"
        key={poke.name}
        style={{
          backgroundColor: backgroundType(poke.types[0].type.name),
          color: "white",
        }}
      >
        <h3>Movimentos:</h3>
        <p>{poke.moves[0].move.name}</p>
        <p>{poke.moves[1] ? poke.moves[1].move.name : "N/A"}</p>
        <p>{poke.moves[2] ? poke.moves[2].move.name : "N/A"}</p>
        <p>{poke.moves[3] ? poke.moves[3].move.name : "N/A"}</p>
        <p>{poke.moves[4] ? poke.moves[4].move.name : "N/A"}</p>
      </div>
    </Root>
  ));

  return console.log("Pokemons: ", pokemons), (<>{pokemap}</>);
};
export default PokemonDetails;
