// FirstPage.jsx
import React, { useContext } from 'react';
import { PokeContext } from './PokeContext';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css';

const FirstPage = () => {
  const { pokemonList } = useContext(PokeContext);
  const firstTenPokemon = pokemonList.slice(0, 10);

  return (
    <div className="page-container">
      <h2 className="page-title center">Halaman Pertama (1 - 10)</h2>
      <ul className="pokemon-list">
        {firstTenPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>


      <div className="button-container">
        <Link to="/second">
          <button className="nav-button">Utiwi Halaman 2</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
