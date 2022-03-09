import React from "react";
import styled from 'styled-components';


const PokedexBackground = styled.div`
    `;

const Pokedex = (props) => {

    return (
        <PokedexBackground>
            {props.pokedex.map((pokemon) => (
                <div key={pokemon.name}>
                    <h2>{pokemon.name}</h2>
                    <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
                    
                </div>
            ))}
            
        </PokedexBackground>
    );
}

export default Pokedex;