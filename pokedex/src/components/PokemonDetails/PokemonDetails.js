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
    margin: 40px;
    gap: 80px;
`

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

const ImagemPokemon = styled.img`
`

const PokemonDetails = () => {
    const {id} = useParams() 
    const [pokemons, setPokemons] = useState([])

    
    useEffect (() => {
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
    }

    const pokemap = pokemons.map((poke) => (
        <Root >  
           

         <InfoCard key={poke.name} style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}>            
         <img src={poke.sprites.front_default}/>
         </InfoCard>
         <InfoCard key={poke.name} style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}>
             <h3>Status</h3>
             {/* show pokemon stats */}
             <p>HP: {poke.stats[0].base_stat}</p>
             <p>Attack: {poke.stats[1].base_stat}</p>
             <p>Defense: {poke.stats[2].base_stat}</p>
             <p>Special-attack: {poke.stats[3].base_stat}</p>
             <p>Special-defense: {poke.stats[4].base_stat}</p>
             <p>Speed: {poke.stats[5].base_stat}</p>
         </InfoCard>
         <InfoCard key={poke.name} style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}>
             <p>Número de tipos: {poke.types.length}</p>
               
                <p>Tipo 1: {poke.types[0].type.name}</p>
                <p>Tipo 2: {poke.types[1] ? poke.types[1].type.name : 'N/A'}</p>
                


         </InfoCard>
         <InfoCard key={poke.name} style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}>
             movimentos
                {/* show pokemon moves */}
                <p>{poke.moves[0].move.name}</p>
                <p>{poke.moves[1] ? poke.moves[1].move.name : 'N/A'}</p>
                <p>{poke.moves[2] ? poke.moves[2].move.name : 'N/A'}</p>
                <p>{poke.moves[3] ? poke.moves[3].move.name : 'N/A'}</p>
                <p>{poke.moves[4] ? poke.moves[4].move.name : 'N/A'}</p>
                

         </InfoCard>
         <InfoCard key={poke.name} style={{
            backgroundColor: backgroundType(poke.types[0].type.name),
            color: "white",
          }}>
          <img src={poke.sprites.back_default} />
         </InfoCard>
                                         
     </Root>
    ))
   

    return(
        console.log('Pokemons: ', pokemons),
        <>
        {pokemap}
        </>
    )

}
export default PokemonDetails