import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/criarStyle.css';
import ReactHtmlParser from 'html-react-parser';



const api = axios.create({
    baseURL: "https://projectnew-3cf2a-default-rtdb.europe-west1.firebasedatabase.app/"
});


const ItemPost = (props) => {
    return (
        <div>
            <p>ID: {props.item.id}</p>
            <p>Título: {props.item.titulo}</p>
            <p>Subtítulo: {props.item.subtitulo}</p>
            <p>Conteúdo: {ReactHtmlParser(props.item.conteudo)}</p>
            <p>Data: {props.item.data}</p>
            <p>Autor: {props.item.autor}</p>
        </div>
    );
};



const Criar = () => {

    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [data, setData] = useState("");
    const [autor, setAutor] = useState("");
    const [filtro, setFiltro] = useState("");
    const [id, setId] = useState(null);
    const [lista, setLista] = useState([]);

    const lerPosts = () => {
        let queryFiltrada = '/posts.json';
        if (filtro.length > 0) {
            queryFiltrada = '/posts.json?orderBy="posts"&equalTo="' + filtro + '"';
        }
        api.get(queryFiltrada)
            .then((resposta) => {
                const novaLista = [];
                for (const chave in resposta.data) {
                    const obj = { ...resposta.data[chave], id: chave }
                    novaLista.push(obj)
                }
                setLista(novaLista);
            })
            .catch(() => {
                alert("Não foi possível ver os posts")
            })
    }

    const editar = (obj) => {
        setTitulo(obj.titulo);
        setSubtitulo(obj.subtitulo);
        setConteudo(obj.conteudo);
        setData(obj.data);
        setAutor(obj.autor);
        setId(obj.id);

    }

    const apagar = (obj) => {
        api.delete("/posts/" + obj.id + ".json")
            .then(() => {
                lerPosts();
            })
            .catch(() => {
                alert("Erro ao apagar o post")
            })
    }

    const limparCampos = () => {
        setTitulo("");
        setSubtitulo("");
        setConteudo("");
        setData("");
        setAutor("");
        setId(null);
    }

    const salvar = () => {
        const obj = { titulo, subtitulo, conteudo, data, autor };
        if (id) {
            api.put("/posts/" + id + ".json", obj)
                .then(() => {
                    limparCampos();
                })
        } else {
            api.post("/posts.json", obj)
                .then(() => {
                    limparCampos();
                })
        }
    }

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
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ]
    };

    return (
        <div className='formulario-container'>
            <div id="criar" className='formu'>
                <label>
                    <p>Título</p>
                    <input type='text' value={titulo} onChange={handleTituloChange} />
                </label>
                <label>
                    <p>Subtítulo</p>
                    <input type='text' value={subtitulo} onChange={handleSubtituloChange} />
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
                    <input type='date' value={data} onChange={handleDataChange} />
                </label>
                <label>
                    <p>Autor</p>
                    <input type='text' value={autor} onChange={handleAutorChange} />
                </label>
                <button onClick={salvar}>Criar postagem</button>
                <button onClick={lerPosts}>Mostrar posts</button>
                {lista.map((item) => (
                    <div key={item.id}>
                        <ItemPost item={item} />
                        <button onClick={() => apagar(item)}>Apagar</button>
                        <button onClick={() => editar(item)}>Editar</button>
                    </div>
                ))}

            </div>


        </div>

    )
}

export default Criar;



