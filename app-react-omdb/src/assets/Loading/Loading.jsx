import React from 'react';
import './loading.scss';

const Loading = () => {
  return (
    <div className="container">
      <div className="loader"></div>
      <div className="text">Loading...</div>
    </div>
  );
};

export default Loading;
