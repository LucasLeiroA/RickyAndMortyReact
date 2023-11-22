import React from 'react';
import { BsCodeSlash, BsGithub, BsLinkedin } from 'react-icons/bs';
import './style.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='container-section--footer'>
        <div className='column--footer'>
          <a className='info--footer' href='https://github.com/LucasLeiroA/RickyAndMortyReact' target='_blank' rel='noreferrer'>
            <BsCodeSlash className='icon--footer' />
            View the code
          </a>
          <a className='info--footer' href='https://rickandmortyapi.com/documentation' target='_blank' rel='noreferrer'>
            Documentation of API
          </a>
        </div>
        <div className='column--footer'>
          <a className='info--footer' href='https://www.linkedin.com/in/lucasleiro/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon--footer' />
            Linkedin
          </a>
          <a className='info--footer' href='https://github.com/LucasLeiroA?tab=repositories' target='_blank' rel='noreferrer'>
            <BsGithub className='icon--footer' />
            Github
          </a>
        </div>
      </section>
      <section className='container-section--footer'>
        <p className='content-second-section--footer'>Powered by LucasLeiro</p>
      </section>
    </footer>
  );
};

export { Footer };