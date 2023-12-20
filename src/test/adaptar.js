import React, {useState, useEffect} from 'react';
import {Button, FlatList, View, Text, TextInput} from 'react-native';
import axios from 'axios';
import {AntDesign} from '@expo/vector-icons';

const api = axios.create({
  baseURL: "https://fiap-2023-2tdst-default-rtdb.firebaseio.com/"
})

  
const ItemCarro = (props) => { 
  return (
    <View>
      <Text>{props.item.id}</Text>
      <Text>{props.item.marca}</Text>
      <Text>{props.item.modelo}</Text>
      <Text>{props.item.ano}</Text>
      <AntDesign name="delete" size={32} 
                  onPress={()=>{props.onApagar(props.item);}}/>
      <AntDesign name="edit" size={32} 
                  onPress={()=>{props.onEditar(props.item);}}/>                  
    </View>
  )
}

const App = () => { 
  const [id, setId] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [lista, setLista] = useState([]);

  const lerCarros = () => {
    let queryFiltrada = '/carros.json';
    if (filtro.length > 0) { 
      queryFiltrada = '/carros.json?orderBy="marca"&equalTo="' + filtro + '"';
    }
    api.get(queryFiltrada)
    .then((resposta)=>{
      const novaLista = [];
      for( const chave in resposta.data ) {
        const obj = {...resposta.data[chave], id: chave}
        novaLista.push(obj)
      }
      setLista(novaLista);
    })
    .catch(()=>{
      alert("Deu erro")
    })
  }

  const editar = (obj) => { 
    setMarca(obj.marca);
    setModelo(obj.modelo);
    setAno(obj.ano);
    setId(obj.id);
  }

  const apagar = (obj) => { 
    api.delete("/carros/" + obj.id + ".json")
    .then(()=>{
      lerCarros();
    })
    .catch(()=>{
      alert("Erro ao apagar o carro")
    })
  }

  const limparCampos = () => { 
    setMarca("");
    setModelo("");
    setAno("");
    setId(null);
  }

  const salvar = () => { 
    const obj = {marca, modelo, ano};
    if (id) { 
      api.put("/carros/" + id + ".json", obj)
      .then(()=>{
        limparCampos();
        lerCarros();
      })
    } else { 
      api.post("/carros.json", obj)
      .then(()=>{
        limparCampos();
        lerCarros();
      })
    }
  }

  return (
    <View style={{flex: 1}}>
      <Text>Gestão de Carros</Text>
      <View style={{flex: 1, backgroundColor: "lightyellow"}}>
        <TextInput  placeholder="Marca" 
                    value={marca} onChangeText={setMarca}/>
        <TextInput  placeholder="Modelo" 
                    value={modelo} onChangeText={setModelo}/>
        <TextInput  placeholder="Ano"
                    value={ano} onChangeText={setAno}/>
        <Button title="Gravar" onPress={salvar}/>
      </View>
      <View style={{flex: 3, backgroundColor: "lightcyan"}}>
        <TextInput  placeholder="Digite o filtro para pesquisar"
                    value={filtro} onChangeText={setFiltro}/>
        <AntDesign name="search1" size={38}
          onPress={lerCarros}
        />
        <FlatList data={lista} renderItem={
                  (prp)=><ItemCarro {...prp} 
                          onApagar={apagar} onEditar={editar}/>
                  }/>
      </View>
    </View>
  )
}

export default App;


















function Criar({setPosts, posts}) {
    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [data, setData] = useState("");
    const [autor, setAutor] = useState("");

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleSubtituloChange = (event) => {
        setSubtitulo(event.target.value);
    };

    const handleConteudoChange = (value) => {
        setConteudo(value);
    };

    const handleDataChange = (event) => {
        setData(event.target.value);
    };

    const handleAutorChange = (event) => {
        setAutor(event.target.value);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, true] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['clean']
        ]
    };

    const SalvarPost = () => {
        setPosts([... posts,{titulo, subtitulo, conteudo, data, autor}])
        console.log({titulo, subtitulo, conteudo, data, autor})
    };

    return (
        <div className='formulario-container'>
            <div id="criar" className='formu'>
                <label>
                    <p>Título</p>
                    <input type='text' value={titulo} onChange={handleTituloChange}/>
                </label>
                <label>
                    <p>Subtítulo</p>
                    <input type='text' value={subtitulo} onChange={handleSubtituloChange}/>
                </label>
                <label>
                    <p>Conteúdo</p>
                    <ReactQuill
                        theme="snow"
                        value={conteudo}
                        onChange={handleConteudoChange}
                        modules={modules}
                    />
                </label>
                <label>
                    <p>Data postagem</p>
                    <input type='date' value={data} onChange={handleDataChange}/>
                </label>
                <label>
                    <p>Autor</p>
                    <input type='text' value={autor} onChange={handleAutorChange}/>
                </label>
                <button onClick={SalvarPost}>Criar postagem</button>
            </div>
        </div>
    );
}

export default Criar;

