import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

const Anima = () => {
  return (
    <div className="Anima">
      <div className="cuadrado cuadrado--red">
        <p>paco1</p>
        <p>paco2</p>
        <p>paco3</p>
        <p>paco4</p>
        {/* <p>paco5</p>
        <p>paco6</p> */}
      </div>
      <div className="cuadrado cuadrado--blue">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="cuadrado cuadrado--rose">
        <p></p>
      </div>
    </div>
  );
};

export default Anima;

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// for (let i of res) {
//   console.log(i);
// }
