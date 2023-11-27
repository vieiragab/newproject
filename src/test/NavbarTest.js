import React, { useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Vicio from '../components/Vicio';
import '../style/styleTest.css';

function Navbar() {
  const [currentComponent, setCurrentComponent] = useState('home');
  const [showOptions, setShowOptions] = useState(false);

  const handleNavigation = (component) => {
    setCurrentComponent(component);
    setShowOptions(false); // Esconde as opções ao clicar em uma das opções
  };

  // Função para exibir as opções ao passar o mouse pelo botão
  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  // Função para ocultar as opções ao tirar o mouse do botão
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  let componentToRender;

  switch (currentComponent) {
    case 'about':
      componentToRender = <About />;
      break;
    case 'contact':
      componentToRender = <Contact />;
      break;
    case 'vicio':
      componentToRender = <Vicio />;
      break;
    default:
      componentToRender = <Home />;
      break;
  }

  return (
    <div className='fora'>
      <div className='menu'>
        <nav>
          <ul>
            <li>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleNavigation('home')}
              >
                Home
              </button>
              {showOptions && ( // Exibe as opções se showOptions for true
                <div className='options'>
                  <ul>
                    <li onClick={() => handleNavigation('about')}>Sobre nós</li>
                    <li onClick={() => handleNavigation('vicio')}>Vicio em Apostas</li>
                  </ul>
                </div>
              )}
            </li>
            <li className='menudireita'>
              <button onClick={() => handleNavigation('contact')}>Contato</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contentBelowMenu">
        {componentToRender}
      </div>
    </div>
  );
}

export default Navbar;
