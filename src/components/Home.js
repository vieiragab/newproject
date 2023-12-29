import React from "react";
import { Link } from "react-router-dom";
import caso2 from "../img/caso2.png";
import caso3 from "../img/caso3.png";
import casoum from "../img/casoum.png";
import jornal from "../img/jornal.png";
import "../style/homeStyle.css";
import { useEffect } from "react";
import UltimasPostagensCarrossel from "./UltimasPostagensCarrossel";

function Home({ posts, getPosts }) {
  useEffect(() => {
    getPosts();
  }, []);

  const ultimasPostagens = posts.slice(-5);


  return (
    <div id="home">
      <div className="board">
        <h2>Nossa missão</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
          et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
        </p>
      </div>

      <div className="content">
        <div className="slide">
          <section>
            <div className="estruturaimg">
              <img className="estrutura" src={casoum} alt="Matéria um" />
              <img className="estrutura" src={caso2} alt="Matéria dois" />
              <img className="estrutura" src={caso3} alt="Matéria três" />
            </div>
          </section>
        </div>

        <div className="link">
          <h2>Como acontece o vício em apostas?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
          </p>
          <button>
            <Link to="/vicio">Saiba mais</Link>
          </button>
        </div>
      </div>


      <div className="jornal">
        <img className="jornal" src={jornal} alt="Jornal" />
        <p>Esteja de olho em nossas postagens</p>
        <a href="/contact">
          <button>Inscreva-se</button>
        </a>
      </div>
      
      <div className="ultimas-postagens">
        <div className="posts">
          <h2>Últimas Postagens</h2>
          <UltimasPostagensCarrossel ultimasPostagens={ultimasPostagens} />
          <a href="/todaspostagens">
            <button>Veja mais postagens</button>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
