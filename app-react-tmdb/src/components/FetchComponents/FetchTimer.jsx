import { useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext';

export const FetchTimer = () => {
  const context = useContext(GlobalContext);

  async function handleFetchTimer() {
    const timer = setTimeout(async () => {
      if (context.userInput.length > 4) {
        await context.request(
          `http://www.omdbapi.com/?apikey=${context.omdbKey}&s=${context.userInput}`,
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }
};
