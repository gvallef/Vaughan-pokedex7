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

const Home = (props) => {
  


  return (
    
    <PokecardContainer>
      {props.pokemonlist.map((pokemon) => ( 
            
        <Pokecard key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
              <button>Adicionar a pokedex</button>
              <Link to={`/details/${props.getPokemonId(pokemon.url)}`}>  
              <button>Ver detalhes</button>  </Link>
                        
        </Pokecard>
        
      ))}
    </PokecardContainer>
  );
};

export default Home;