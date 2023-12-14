import ReactHtmlParser from 'html-react-parser';


function Post ({post}) {

    return(
        <div>
            <p>{post?.titulo}</p>
            <p>{post?.subtitulo}</p>
            <div>{ReactHtmlParser(post?.conteudo)}</div>
            <p>{post?.data}</p>
            <p>{post?.autor}</p>
        </div>


    )
}


export default Post;