import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', { email, nome, telefone, cep });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </label>
      <label>Telefone:
        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      </label>
      <label>CEP:
        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} maxLength="8" minLength="8" pattern="[0-9]*" title="Digite apenas números" required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contact;