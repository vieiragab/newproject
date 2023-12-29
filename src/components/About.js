import React from 'react';
import aboutus from '../img/aboutus.png';
import '../style/aboutStyle.css';



function About() {
  return (
    <div id="about">
      <div className='espaco'>
        <div className='divisao'>
          <section>
            <div className="estruturadivisao">
              <img className="estruturadois" src={aboutus} alt="Sobre nos" />
            </div>
          </section>
        </div>


        <div className='texto'>
          <h2 className='abouth2'>Sobre nós</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</p>
        </div>

      </div>

    </div>
  );
}

export default About;