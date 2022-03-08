import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';

import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />          
        <Route path = "/details/:id" element = {<PokemonDetails />} />          
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
