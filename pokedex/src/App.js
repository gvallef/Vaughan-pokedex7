import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import Header from './components/header/Header';
import Pokedex from './components/pokedex/Pokedex';
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  const [pokemonlist, setPokemonlist] = useState([]);
  let limit = 10;
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((res) => {
        setPokemonlist(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const buildImgUrl = (url) => {
    const id = url.split("/");
    const idx = id.length - 2;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[idx]}.png`;
    return imgUrl;
    };
    const getPokemonId = (url) => {
      const id = url.split("/");
      const idx = id.length - 2;
      const pokemonId = id[idx];
      return pokemonId;
    };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home
        pokemonlist={pokemonlist}
        buildImgUrl={buildImgUrl}
        getPokemonId={getPokemonId} />} />
        <Route path = "/pokedex" element = {<Pokedex />} />
        <Route path = "/details/:id" element = {<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;









