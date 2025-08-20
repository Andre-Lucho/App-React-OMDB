import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

const Form = () => {
  const context = useContext(GlobalContext);

  async function handleSubmit(e) {
    e.preventDefault();
    await context.request(
      `http://www.omdbapi.com/?apikey=${context.omdbKey}&s=${context.userInput}`,
    );
  }

  // useEffect(() => {
  //   function handleFetchTimer() {
  //     const timer = setTimeout(async () => {
  //       if (context.userInput.length > 3) {
  //         context.request(
  //           `http://www.omdbapi.com/?apikey=${context.omdbKey}&s=${context.userInput}`,
  //         );
  //       }
  //     }, 1500);

  //     return () => clearTimeout(timer);
  //   }
  //   handleFetchTimer();
  // }, [context.userInput]);

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={context.userInput}
        onChange={({ target }) => context.setUserInput(target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Go!</button>
    </form>
  );
};

export default Form;
