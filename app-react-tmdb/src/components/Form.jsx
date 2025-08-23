import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from '../assets/Button/Button';

const Form = () => {
  const context = useContext(GlobalContext);

  async function handleSubmit(e) {
    if (context.omdbKey) {
      e.preventDefault();
      const result = await context.request(
        `http://www.omdbapi.com/?apikey=${context.omdbKey}&s=${context.userInput}`,
      );
    }
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        value={context.userInput}
        onChange={({ target }) => context.setUserInput(target.value)}
        placeholder="Search for a movie..."
      />
      <Button />
    </form>
  );
};

export default Form;
