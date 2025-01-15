import React, { useEffect, useState } from 'react';
import '../styles/Hub.css';
import HeaderHub from '../components/headerHub';
import AreaTypes from '../components/areaTypes';
import Cards from '../components/card';

function Hub() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]); // Estado para armazenar os detalhes dos Pokémons

  // Função para buscar os dados dos pokemons
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
      const data = await response.json();
      setPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  // Função para buscar os detalhes de cada Pokémon
  useEffect(() => {
    const fetchDetails = async () => {
      const details = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          console.log(data)
          return {
            name: pokemon.name,
            image: data.sprites.front_default,
            types: data.types.map((type) => type.type.name),
          };
        })
      );
      setPokemonDetails(details);
    };

    if (pokemons.length > 0) {
      fetchDetails();
    }
  }, [pokemons]); // Esse efeito só é executado quando o estado `pokemons` mudar

  return (
    <div className='container'>
      <HeaderHub />
      <AreaTypes />
      <div className='areaCards'>
        {pokemonDetails.map((pokemon, index) => (
          <Cards 
            key={index} 
            name={pokemon.name} 
            image={pokemon.image} 
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}

export default Hub;
