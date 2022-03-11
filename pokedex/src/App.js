import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import Header from './components/header/Header';
import Pokedex from './components/pokedex/Pokedex';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const GlobalContext = createContext()

function App() {
  const [pokemonlist, setPokemonlist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  let limit = 151;

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((res) => {
        setPokemonlist(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <GlobalContext.Provider value = {{pokemonlist, setPokemonlist, pokedex, setPokedex}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/pokedex" element = {<Pokedex/>} />          
          <Route path = "/details/:id" element = {<PokemonDetails />} />          
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
    
  );
}

export default App;
