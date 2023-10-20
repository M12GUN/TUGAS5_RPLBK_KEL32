// SecondPage.jsx
import React, { useContext } from 'react';
import { PokeContext } from './PokeContext';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css';

const SecondPage = () => {
  const { pokemonList } = useContext(PokeContext);
  const secondTenPokemon = pokemonList.slice(10, 20);

  return (
    <div className="page-container">
      {/* Center the title using a class */}
      <h2 className="page-title center">Halaman Kedua (11 - 20)</h2>
      <ul className="pokemon-list">
        {secondTenPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>

      {/* Add a button to go back to the first page, wrapped in a button-container div */}
      <div className="button-container">
        <Link to="/">
          <button className="nav-button">Utiwi Halaman 1</button>
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
