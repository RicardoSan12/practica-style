import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import './style.css';

import useUser from './hook/useUser';
import useCount from './hook/useCount';

import Anima from './components/Anima';

import UserContext, { UserContextProvider } from './context/UserContext';

interface userInterface {
  name: { first: string };
  picture: { medium: string };
}

const App = () => {
  const { palabra: letras, handlePalabra, persona } = useUser();

  return (
    <div className="app">
      <h1>Repaso rapido</h1>
      <MoreLetter letra={letras} onPalabra={handlePalabra} />
      {/* <UserRandom person={persona} /> */}
      <Anima />
      {/* <Counters /> */}
    </div>
  );
};

export default App;





const Counters = () => {
  const ContadorPrime = useCount();
  const ContadorPlus = useCount();
  // const {persona, handlePalabra, palabra} = useContext(UserContext);

  // console.log('---');
  return (
    <div className="contador">
      <button onClick={ContadorPrime.more}>MAS</button>
      <h2>{ContadorPrime.count}</h2>
      <button onClick={ContadorPrime.minus}>MENOS</button>
      <button onClick={ContadorPrime.reset}>RESET</button>
      <button onClick={ContadorPlus.more}>MAS</button>
      <h2>{ContadorPlus.count}</h2>
      <button onClick={ContadorPlus.minus}>MENOS</button>
      <button onClick={ContadorPlus.reset}>RESET</button>
    </div>
  );
};

const MoreLetter = ({ letra, onPalabra }) => (
  <div className="suma">
    <h2>Resultado se la suma {letra}</h2>
    <button onClick={onPalabra}>Presiona para agregar mas palabras </button>
  </div>
);

const UserRandom = ({ person }) => {
  if (!person) return <h1>Cargando esto</h1>;
  return (
    <div className="user">
      <UserName firstname={person.first} />
      <br />
      <img src={person.medium} alt="" />
    </div>
  );
};

const UserName = ({ firstname = 'El tio' }) => {
  // if (!firstname) return <h1>Cargando nombre</h1>;
  return (
    <div>
      <h2>El nombre de este man: {firstname}</h2>
    </div>
  );
};
