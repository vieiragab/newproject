import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/criarStyle.css';


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



