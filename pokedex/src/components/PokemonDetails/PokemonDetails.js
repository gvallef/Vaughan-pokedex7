import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import axios from "axios";

const Root = styled.div`
    display: grid;
    height: 100vh;
    border: 1px solid black;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`

const InfoCard = styled.div`
    display: flex;
    border: 1px solid black;
`

const PokemonDetails = () => {
    const {id} = useParams() 
    const [pokemons, setPokemons] = useState([])

    const buildImgUrl = (url) => {
        const id = url.split("/");
        const idx = id.length - 2;
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[idx]}.png`;
    
        return imgUrl;
        };
    
    useEffect (() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setPokemons([res.data]);
                console.log(pokemons)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []) 

    const pokemap = pokemons.map((poke) => (
        <Root>       

         <InfoCard>            
         <img src={poke.sprites.front_default}/>
         </InfoCard>
         <InfoCard>
             status
         </InfoCard>
         <InfoCard>
             tipo
         </InfoCard>
         <InfoCard>
             movimentos
         </InfoCard>
         <InfoCard>
          <img src={poke.sprites.back_default} />
         </InfoCard>
                                         
     </Root>
    ))
   

    return(
        <>
        {pokemap}
        </>
    )

}
export default PokemonDetails