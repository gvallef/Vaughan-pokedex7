import React from "react";
import Pokedexbackground from "../../assets/pokedexbackground.png";
import styled from 'styled-components';

const PokedexBackground = styled.div`
    background-image : url(${Pokedexbackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 150vh;
    `;

const Pokedex = () => {
    return (
        <PokedexBackground>
            
        </PokedexBackground>
    );
}

export default Pokedex;