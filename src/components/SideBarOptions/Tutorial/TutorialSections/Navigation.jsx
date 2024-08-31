// src/components/Navigation.js
import React from 'react';
import '../TutorialCss/Navigation.css'
const Navigation = ({ onNext, onPrevious }) => {
  return (
    <div className='flex flex-row justify-center'>
      <button className='navButton' onClick={onPrevious}>Anterior</button>
      <button className='navButton' onClick={onNext}>Próximo</button>
    </div>
  );
};

export default Navigation;
