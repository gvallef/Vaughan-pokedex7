import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "nes.css/css/nes.min.css";

const PokedexBackground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const PokeImage = styled.div`
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 50%;
  margin: 10px;
`;

const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Pokedex = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = props.pokedex.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
    <SearchContainer>
    <textarea onChange={handleChange}  placeholder="Pokemon search" id="textarea_field" class="nes-textarea"
    style={{
      backgroundColor: "white",
      color: "black",
      fontSize: "15px",
      width: "250px",
      height: "50px",
    }}></textarea>
    </SearchContainer>

    <PokedexBackground>

      {filteredPokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          class="nes-container is-rounded"
          style={{
            backgroundColor: "#F7DE3F",
            color: "#3860BE",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
          }}
        >
          <h2>{pokemon.name}</h2>
          <PokeImage>
            <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
          </PokeImage>
          <CardButtons>
            <button
              style={{ height: "30px", padding: "0px" }}
              type="button"
              class="nes-btn is-error"
              onClick={() => props.removeFromPokedex(pokemon)}
            >
              Remover
            </button>
            <Link to={`/details/${props.getPokemonId(pokemon.url)}`}>
              <button
                type="button"
                class="nes-btn is-primary"
                style={{ height: "30px", padding: "0px" }}
              >
                Detalhes
              </button>
            </Link>
          </CardButtons>
        </div>
      ))}
    </PokedexBackground>
    </>
  );
};

export default Pokedex;
