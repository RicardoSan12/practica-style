import { useState, useEffect } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);

  const more = () => setCount((c) => c + 1);
  const minus = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);

  return {
    count,
    more,
    minus,
    reset,
  };
};

export default useCount;
