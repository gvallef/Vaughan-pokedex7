export const buildImgUrl = (url) => {
    const id = url.split("/");
    const idx = id.length - 2;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[idx]}.png`;

    return imgUrl;
  };

export const getPokemonId = (url) => {
    const id = url.split("/");
    const idx = id.length - 2;
    const pokemonId = id[idx];
    return pokemonId;
  };

export const addToPokedex = (pokemon, pokemonlist, setPokemonlist, pokedex, setPokedex) => {

    setPokedex([...pokedex, pokemon]);
    const newPokemonList = pokemonlist.filter((p) => p.name !== pokemon.name);
    setPokemonlist(newPokemonList);
  };

export const removeFromPokedex = (pokemon, pokemonlist, setPokemonlist, pokedex, setPokedex) => {
    const newPokedex = pokedex.filter((p) => p.name !== pokemon.name);
    setPokedex(newPokedex);
    const newPokemonList = [...pokemonlist, pokemon];
    setPokemonlist(newPokemonList);
  };