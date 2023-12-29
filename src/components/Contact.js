import axios from 'axios';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import '../style/criarStyle.css';



const api = axios.create({
  baseURL: "https://bet-responsavel-default-rtdb.europe-west1.firebasedatabase.app/"
});



const Contact = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [filtro, setFiltro] = useState("");
  const [id, setId] = useState(null);

  
  const limparCampos = () => {
    setNome("");
    setEmail("");
    setTelefone("");
    setData("");
    setId(null);
  }
  
  const salvar = () => {
    const obj = { nome, email, telefone, data };
    if (id) {
      api.put("/contact/" + id + ".json", obj)
      .then(() => {
        limparCampos();
      })
    } else {
      api.post("/contact.json", obj)
      .then(() => {
        limparCampos();
      })
    }
  }
  
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };
  
  const handleDataChange = (event) => {
    setData(event.target.value);
  };
  
  
  return (
    <div className='formulario-container'>
    <div id="criar" className='formu'>
      <label>
        <p>Nome</p>
        <input type='text' value={nome} onChange={handleNomeChange} />
      </label>
      <label>
        <p>E-mail</p>
        <input type='email' value={email} onChange={handleEmailChange} />
      </label>
      <label>
        <p>Telefone</p>
        <input type='text' value={telefone} onChange={handleTelefoneChange} />
      </label>
      <label>
        <p>Data nascimento</p>
        <input type='date' value={data} onChange={handleDataChange} />
      </label>
      <button onClick={salvar}>Enviar cadastro</button>
    </div>
  </div>

)
}



export default Contact;