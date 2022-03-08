import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const PokecardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Pokecard = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Home = () => {
  const [pokemonlist, setPokemonlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemonlist(res.data.results);
        console.log(res.data.results)
        console.log(pokemon)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const buildImgUrl = (url) => {
    const id = url.split("/");
    const idx = id.length - 2;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[idx]}.png`;

    return imgUrl;
    };
  
    const getPokemonId = (url) => {
      const id = url.split("/");
      const idx = id.length - 2;
      const pokemonId = id[idx];
      return pokemonId;
    };


  return (
    
    <PokecardContainer>
      {pokemonlist.map((pokemon) => ( 
        <Link to={`/details/${getPokemonId(pokemon.url)}`}>     
        <Pokecard key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={buildImgUrl(pokemon.url)} alt={pokemon.name} />
              <button>Adicionar a pokedex</button>
              <button>Ver detalhes</button>              
        </Pokecard>
        </Link>
      ))}
    </PokecardContainer>
  );
};

export default Home;