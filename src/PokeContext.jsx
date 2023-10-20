// PokeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const data = response.data.results;
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching data from PokeAPI', error);
      }
    };

    if (pokemonList.length === 0) {
      fetchData();
    }
  }, [pokemonList]);

  return (
    <PokeContext.Provider value={{ pokemonList }}>
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContext, PokeProvider };
