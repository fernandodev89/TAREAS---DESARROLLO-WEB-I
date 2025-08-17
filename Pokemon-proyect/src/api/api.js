import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=102'

export const getPokemon = async () => {
  return axios 
  .get(API_URL)
  .then((res) => res.data.results)
  .catch((err) => console.log(err))
}

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => ({
    "id" : res.data.id,
    "name" : res.data.name.toUpperCase(),
    "img" : res.data.sprites['front_default'],
    "species" : res.data.species.name.toUpperCase(),
  }))
  .catch((err) => console.log(err))
}

export async function fet(){
  const pokemons = await getPokemon();
  const detail = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
  return detail
}

fet().then((data) => console.log(data))