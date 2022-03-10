import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'



const PokecardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const PokeImage = styled.div`
    background-color: #F5F5F5;
    border: 1px solid black;
    border-radius: 50%;
    margin: 10px;
    `;

const CardButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    `;

const Home = (props) => {


  return (
    
    <PokecardContainer>
      {props.pokemonlist.map((pokemon) => ( 
             
        <div class="nes-container is-rounded" key={pokemon.name} style={{
          backgroundColor: "#F7DE3F",
          color: "#3860BE",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
            <h2>{pokemon.name}</h2>
            <PokeImage>
            <img src={props.buildImgUrl(pokemon.url)} alt={pokemon.name} />
            </PokeImage>
            <CardButtons>
              <button style={{ height: "30px", padding: "0px"}} type="button" class="nes-btn is-success" onClick={ () => props.addToPokedex(pokemon)}>Adicionar</button>
              <Link to={`/details/${props.getPokemonId(pokemon.url)}`}>
              <button type="button" class="nes-btn is-primary"
              style={{ height: "30px", padding: "0px"}}>Detalhes</button>              
              </Link>
            </CardButtons>
        {/* </Pokecard> */}
            </div>
      ))}

    </PokecardContainer>
  );
};

export default Home;