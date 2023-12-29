import React from 'react';
import '../style/vicioStyle.css'
import Previnir from './Previnir';
import Calcular from './Calcular';
import Planejamento from './Planejamento';
import Sinais from './Sinais';

const Vicio = () => {
  return (
    <div id="vicio">
      <div className='textos'>
        <Previnir />
        <p>----------------------</p>
        <Calcular />
        <p>----------------------</p>
        <Planejamento />
        <p>----------------------</p>
        <Sinais />
      </div>

    </div>
  );
}

export default Vicio;