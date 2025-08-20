import { useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext';

export const Fetch = () => {
  const context = useContext(GlobalContext);

  async function handleFetch(e) {
    e.preventDefault();
    await context.request(
      `http://www.omdbapi.com/?apikey=${context.omdbKey}&s=${context.userInput}`,
    );
  }
};

// useEffect(() => {

// }, [context.userInput]);
