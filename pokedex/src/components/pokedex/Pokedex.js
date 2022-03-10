import {React, useState} from "react";
import styled from "styled-components";
import './pokedex.css';
import "nes.css/css/nes.min.css"

const PokedexBackground = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: 10px;
    `;

const PokeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-width: 120px;
`;

const PokeImage = styled.div`
    background-color: cornflowerblue;
    border-radius: 50%;
    margin: 10px;
    `;


const Pokedex = (props) => {

  return (
    <PokedexBackground>
        
      {props.pokedex.map((pokemon) => (
         
                     <div class="nes-container is-rounded">
                <PokeCardContainer key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <PokeImage>
                    <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
                    </PokeImage>
                    <button type="button" class="nes-btn is-error" onClick={ () => props.removeFromPokedex(pokemon)}>Remover</button>
                </PokeCardContainer>
                    </div>
            ))}
        
      
    </PokedexBackground>
  );
};

export default Pokedex;
