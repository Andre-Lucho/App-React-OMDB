import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from '../assets/Button/Button';

const Form = () => {
  const context = useContext(GlobalContext);
  const { userInput, setUserInput, newFetch } = context;

  return (
    <form className="search-container" onSubmit={(e) => newFetch(e)}>
      <input
        type="text"
        id="search"
        value={userInput}
        onChange={({ target }) => setUserInput(target.value)}
        placeholder="Search for a movie..."
      />
      <Button />
    </form>
  );
};

export default Form;
