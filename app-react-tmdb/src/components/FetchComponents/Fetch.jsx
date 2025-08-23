import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

export const Fetch = () => {
  const context = useContext(GlobalContext);

  const { omdbKey, request, userInput, setUserInput, currentPage, totalPages } =
    context;

  async function handleFetch(e) {
    if (omdbKey) {
      e.preventDefault();
      const result = await context.request(
        `http://www.omdbapi.com/?apikey=${omdbKey}&s=${userInput}&page=${currentPage}`,
      );
      // totalPages = result.json.totalResults;

      return totalPages;
    }
  }
};
