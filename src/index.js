import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PokemonUniverse from './components/pokemon-universe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <PokemonUniverse />

  </React.StrictMode>
);

