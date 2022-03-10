import React from "react";
import styled from 'styled-components';
import "nes.css/css/nes.min.css"


const PokedexBackground = styled.div`
    `;

const Pokedex = (props) => {


    return (
        <PokedexBackground>
            {props.pokedex.map((pokemon) => (
                <div key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
                    <button onClick={ () => props.removeFromPokedex(pokemon)}>Remover</button>
                    
                </div>
            ))}
            
        </PokedexBackground>
    );
}

export default Pokedex;