import React from 'react';

const Rodape = () => {

  return (
    <div style={estiloRodape}>
      <p>Nome: Teste</p>
      <p>Data: </p>
      
    </div>
  );
};

const estiloRodape = {
  backgroundColor: '#0766ad',
  padding: '10px',
  marginTop: '20px',
  textAlign: 'center',
  bottom: 0,
  width: '98.5%',

};

export default Rodape;
