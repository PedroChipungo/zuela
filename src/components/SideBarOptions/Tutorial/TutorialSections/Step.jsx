// src/components/Step.js
import React from 'react';

const Step = ({ title, content, id, onNext, onPrevious  }, ) => {
  return (
    <div className='text-blue-950 w-full'>
      <h2 className='text-blue-900 mb-6 font-bold text-2xl'>{id} {title}</h2>
      <p>{content}</p>
      <div className='mt-10 flex flex-row justify-between w-full'>
          {/* <button className='navButton' onClick={onPrevious}>Anterior</button> */}
          <button className='navButton' onClick={onNext}>Próximo</button>
    </div>
    </div>
  );
};

export default Step;
