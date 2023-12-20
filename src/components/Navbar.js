import React from 'react';
import '../style/navStyle.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='fora'>
      <div className='menu'>
        <nav>
          <ul>
            <li>
              <Link className='linkc' to="/">Home</Link>
            </li>
            <li>
              <Link className='linkc' to="/about">Sobre nós</Link>
            </li>
            <li>
              <Link className='linkc' to="/bets">Sobre apostar</Link>
              <ul>
	                  <li><a href="/bets/oquesao">O que são apostas?</a></li>
	                  <li><a href="#">Fatos</a></li>
	                  <li><a href="#">Vocabulário</a></li>
                    <li><a href="#">Perguntas frequentes</a></li>
	       		  </ul>
            </li>
            <li>
              <Link className='linkc' to="/vicio">Apostas Responsáveis</Link>
            </li>
            <li>
              <Link className='linkc' to="/ajuda">Ajuda</Link>
            </li>
            <li>
              <Link className='linkc' to="/criar">Criar post</Link>
            </li>
            <li className='menudireita'>
              <Link className='linkc' to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default Navbar;
