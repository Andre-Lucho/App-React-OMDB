import React from 'react';
import './button.scss';

const Button = () => {
  return (
    <button class="button" type="submit">
      <span class="shadow"></span>
      <span class="edge"></span>
      <div class="front">
        <span>Serch</span>
      </div>
    </button>
  );
};

export default Button;
