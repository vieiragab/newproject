import React from 'react';
import ReactHtmlParser from 'html-react-parser';
//import '../style/postStyle.css'

const formatarData = (data) => {
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(data).toLocaleDateString('pt-BR', opcoes);
};


function Post({ post }) {

    return (
        <div>
            <p>{post?.titulo}</p>
            <p>{post?.subtitulo}</p>
            <p>{ReactHtmlParser(post?.conteudo)}</p>
            <p>{formatarData(post?.data)}</p>
            <p>{post?.autor}</p>
        </div>
    );
}


export default Post;