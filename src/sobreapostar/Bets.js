import React from 'react';
import '../style/betsStyle.css';
import Oque from './Oque';
import Fatos from './Fatos';
import Vocabulario from './Vocabulario';
import Perguntas from './Perguntas';


const Bets = () => {
  return (
    <div id="bets">
      <div className='textosd'>
        <Oque/>
        <p>----------------------</p>
        <Fatos/>
        <p>----------------------</p>        
        <Vocabulario/>
        <p>----------------------</p>        
        <Perguntas/>
      </div>
    </div>
  );
}

export default Bets;