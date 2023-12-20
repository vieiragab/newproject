import { Link } from "react-router-dom";
import '../style/cardStyle.css';

function Card({ post }) {

  return (
    <div className='post'>
      <p>{post?.titulo}</p>
      <p>{post?.subtitulo}</p>
      <button>
        <Link to={`/${post.titulo}`}>Saiba mais</Link>
      </button>
    </div>
  )
}

export default Card;