import React from 'react';
import './button.scss';

const Button = () => {
  return (
    <button className="button" type="submit">
      <span className="shadow"></span>
      <span className="edge"></span>
      <div className="front">
        <span>Serch</span>
      </div>
    </button>
  );
};

export default Button;
