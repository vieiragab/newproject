import React, { useState } from 'react';
import Card from './Card';
import '../style/ultimosposts.css';

const UltimasPostagensCarrossel = ({ ultimasPostagens }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ultimasPostagens.length) % ultimasPostagens.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ultimasPostagens.length);
  };

  return (
    <div className="carrossel">
      {ultimasPostagens.slice().reverse().map((post, index) => (
        <div key={index} className={index === currentIndex ? 'ativo' : 'inativo'}>
          <Card post={post} />
        </div>
      ))}
      <div className="button-container">
        <button onClick={goToPrevious}>Anterior</button>
        <button onClick={goToNext}>Próximo</button>
      </div>
    </div>
  );
};

export default UltimasPostagensCarrossel;
