import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import Header from './components/header/Header';
import Pokedex from './components/pokedex/Pokedex';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path = "/" element = {<Home />} />          
        <Route path = "/details/:id" element = {<PokemonDetails />} />    
        <Route path = "/pokedex" element = {<Pokedex />} />      
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

