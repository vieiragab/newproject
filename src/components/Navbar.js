import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Vicio from './Vicio';
import '../style/navStyle.css';

function Navbar() {
  const [currentComponent, setCurrentComponent] = useState('home');

  const handleNavigation = (component) => {
    setCurrentComponent(component);
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
              <button onClick={() => handleNavigation('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavigation('about')}>Sobre nós</button>
            </li>
            <li>
              <button onClick={() => handleNavigation('vicio')}>Vicio em Apostas</button>
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
