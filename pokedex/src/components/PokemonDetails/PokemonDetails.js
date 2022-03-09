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
    flex-direction: column ;
    border: 1px solid black;
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
        
            
    }, []) 



    const pokemap = pokemons.map((poke) => (

        <Root>       

         <InfoCard>            
         <img src={poke.sprites.front_default}/>
         </InfoCard>
         <InfoCard>
             
             <h3> Status:  </h3>
             <p>
               HP: {poke.stats[0].base_stat} 
            </p>
            <p>
               attack: {poke.stats[1].base_stat} 
            </p>
            <p>
               defense: {poke.stats[2].base_stat} 
            </p>
            <p>
               special-attack: {poke.stats[3].base_stat} 
            </p>
            <p>
               special-defense: {poke.stats[4].base_stat} 
            </p>
            <p>
               speed: {poke.stats[5].base_stat} 
            </p>
            
          
          
         </InfoCard>
         <InfoCard>
            <h3> Type</h3>
            <p>
               type 1: {poke.types[0].type.name} 
            </p>
            <p>
               type 2:  {poke.types[1] ? poke.types[1].type.name : 'N/A'} 
            </p>

         </InfoCard>
         <InfoCard>
         <h3> Moves</h3>
         <p>
               move name 1: {poke.moves[0].move.name} 
        </p>
        <p>
               move name 2: {poke.moves[1].move.name} 
        </p>
        <p>
               move name 3: {poke.moves[2].move.name} 
        </p>
        <p>
               move name 4: {poke.moves[3].move.name} 
        </p>
        <p>
               move name 5: {poke.moves[4].move.name} 
        </p>

         </InfoCard>
         <InfoCard>
          <img src={poke.sprites.back_default} />
         </InfoCard>
                                         
     </Root>
    ))
   

    return(
        console.log(pokemons),
        
        <>
        {pokemap}
        </>
    )

}
export default PokemonDetails