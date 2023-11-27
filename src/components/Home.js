import React from 'react';
import '../style/homeStyle.css';
import casoum from '../img/casoum.png';
import caso2 from '../img/caso2.png';
import caso3 from '../img/caso3.png';
import jornal from '../img/jornal.png';


function Home () {


  return (
    <div id="home">

      <div className='board'>
        <h2>Nossa missão</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</p>
      </div>

      <div className='content'>

      <div className='slide'>
        <section>
          <div className="estruturaimg">
            <img className="estrutura" src={casoum} alt="Matéria um"/>
            <img className="estrutura" src={caso2} alt="Matéria dois"/>
            <img className="estrutura" src={caso3} alt="Matéria três"/>
          </div>
        </section>
      </div>

      
      <div className='link'>
        <h2>Como acontece o vício em apostas?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</p>
        <button>Saiba mais</button>
      </div>

      </div>

      <div className='jornal'>
          <img className="jornal" src={jornal} alt="Jornal"/>
          <p>Esteja de olho em nossas postagens</p>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScO_L5kgnAS168Dkbbeia3gMMQL_XeTq5EVIfvGy1DjOEGgAw/viewform?usp=sf_link' target="_blank">
          <button>Inscreva-se</button>
          </a>

      <div className='posts'>
        <div className='post'>
          <p>Post 1</p>
          <a href='https://www.metropoles.com/saude/vicio-aposta-esportivas-riscos' target="_blank">
          <button>Saiba mais</button>
          </a>
        </div>
        <div className='post'>
          <p>Post 2</p>
          <button>Saiba mais</button>
        </div>
        <div className='post'>
          <p>Post 3</p>
          <button>Saiba mais</button>
        </div>
        <div className='post'>
          <p>Post 4</p>
          <button>Saiba mais</button>
        </div>
        <div className='post'>
          <p>Post 5</p>
          <button>Saiba mais</button>
        </div>
      </div>

      </div>



    </div>
  );
}

export default Home;
