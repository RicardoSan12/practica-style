import { useState, useEffect } from 'react';
import getUser from '../services/getUser';

const useUser = () => {
  const [palabra, setPalabra] = useState('esta es una oracion');

  const handlePalabra = () => setPalabra((pa) => pa + pa);

  const [persona, setPersona] = useState({});
  // console.log('---');

  useEffect(() => {
    getUser().then(setPersona);
  }, [palabra]);

  return {
    persona,
    handlePalabra,
    palabra,
  };
};

export default useUser;
