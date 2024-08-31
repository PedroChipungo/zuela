// src/components/TutorialIntro.js
import React, { useState } from 'react';
import Step from './Step';
import Navigation from './Navigation';

const steps = [ 'firstStep','secondStep'
 
//   { id: 1, 
//     title:"Bem-vindo", 
//     content: 'Vamos guiá-lo pelas principais funcionalidades'
//   },
//   { id: 2, 
//     title: " Fonética e Vocabulário",
//     content: 'Ouça a pronúncia correta das palavras e veja exemplos de uso em frases. Escolha uma língua e pratique' 
// },
//   { id: 3, 
//     title: "Capacidade Auditiva e Percepção",
//     content: 'Teste sua compreensão auditiva. Ouça palavras e frases, e selecione a opção correta' 
//     },
//   { id: 4, 
//     title: "Imersão Cultural",
//     content: 'Explore músicas, livros, áudios e histórias para mergulhar na cultura por trás das línguas' 
//     },
//   { id: 5, 
//     title: "Dicas Finais",
//     content: 'Use o app regularmente para reforçar seu aprendizado. A prática é essencial' 
//     },
];

const TutorialIntro = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      console.log(currentStep)
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <button onClick={() => handleNext()}>Next</button>
      {/* <Step onNext={handleNext} onPrevious={handlePrevious} title={steps[currentStep].title} content={steps[currentStep].content}  id={steps[currentStep].id }/> */}
      {/* <Navigation onNext={handleNext}  /> */}
    </div>
  );
};

export default TutorialIntro;
