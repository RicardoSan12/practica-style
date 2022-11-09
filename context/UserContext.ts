import * as React from 'react';
import { useState, useEffect } from 'react';
import getUser from '../services/getUser';

const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const [palabra, setPalabra] = useState('esta es una oracion');
  const handlePalabra = () => setPalabra((pa) => pa + pa);

  const [persona, setPersona] = useState({});
  // console.log('---');

  useEffect(() => {
    getUser().then(setPersona);
  }, [palabra]);
  
  // return (
  //   <UserContext.Provider value={{ persona, handlePalabra, palabra }}>
  //     {children}
  //   </UserContext.Provider>
  // );
};

export default UserContext;
