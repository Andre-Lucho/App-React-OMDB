import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../assets/Button/Button';

const Form = () => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      navigate('/dashboard', { state: { input: userInput } });
    }
  };

  return (
    <div>
      <form className="search-container" onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          id="search"
          value={userInput}
          onChange={({ target }) => setUserInput(target.value)}
          placeholder="Buscar filme..."
        />
        <Button />
      </form>
    </div>
  );
};

export default Form;
